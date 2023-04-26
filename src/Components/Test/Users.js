import React, { useCallback, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const getUserWithAxios = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/users`
  );
  return data;
};

const Users = () => {
  const queryClient = useQueryClient();

  const [userId, setUserId] = useState(5);

  // Query
  const { isLoading, data, isError } = useQuery("users", getUserWithAxios, {
    // 데이터가 fresh -> stale 상태로 변경되는데 걸리는 시간
    // fresh 상태일때는 쿼리 인스턴스가 새롭게 mount 되어도 네트워크 fetch가 일어나지 않는다.
    // 데이터가 한번 fetch 되고 나서 staleTime이 지나지 않았다면 unmount 후 mount 되어도 fetch가 일어나지 않는다.
    // staleTime: 5000,
    // suspense: false,
  });

  // useMutation을 사용해 데이터 업데이트
  const mutation = useMutation(
    (data) => axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, data),
    {
      onMutate: (data) => {
        const previousValue = queryClient.getQueryData("users");
        console.log("previousValue", data);
        queryClient.setQueryData("users", (old) => {
          console.log("old", old);
          return [...old, data];
        });

        return previousValue;
      },
      onSuccess: (result, variables, context) => {
        console.log("Success message...", result);
        console.log("variables...", variables);
        console.log("onMutate에서 넘어온 값", context);
        setUserId(userId + 1);
      },
    }
  );

  const handleSubmit = useCallback(
    (data) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  if (isError) return <div>Error!</div>;

  return (
    <ul>
      {!isLoading && data.map((i) => <li key={i.id}>{i.name}</li>)}
      <button
        onClick={() => handleSubmit({ id: userId, name: `test${userId}` })}
      >
        유저 추가
      </button>
    </ul>
  );
};

export default Users;
