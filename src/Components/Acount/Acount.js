import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Acount = () => {
  return (
    <div className="container-fluid contents-wrap main_cont">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row mb-3 align-items-center">
            <div className="col-auto">
              <form action="" method="get" className="form-inline" id="filter">
                <div className="form-group mr-2 mw-180">
                  <select
                    name="management-type"
                    className="form-select form-control col"
                  >
                    <option value="0">회원구분</option>
                    <option value="1">사내관리자</option>
                    <option value="2">DSP</option>
                    <option value="3">퍼블리셔</option>
                  </select>
                </div>
                <div className="form-group mr-2 mw-180">
                  <select
                    name="admin-type"
                    className="form-select form-control col"
                  >
                    <option value="0">담당자</option>
                    <option value="1">장동건</option>
                    <option value="2">원빈</option>
                    <option value="3">고수</option>
                  </select>
                </div>
                <div className="input-group search_wrap">
                  <i className="fa fa-search"></i>
                  <input
                    type="text"
                    name="s_keyword"
                    id="s_keyword"
                    className="form-control"
                    value=""
                    placeholder="아이디, 이름(회사명)"
                  />
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="search_cancel bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                  </svg>
                  <div className="input-group-append">
                    <button
                      type="submit"
                      id="submit"
                      className="btn_search btn btn-primary"
                    >
                      검색
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-auto ml-auto total_member">
              전체회원 :<span>10</span>
            </div>
          </div>
          <div className="table_wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">구분</th>
                  <th scope="col">이름(회사명)</th>
                  <th scope="col">아이디</th>
                  <th scope="col">담당자</th>
                  <th scope="col">회원상태</th>
                </tr>
              </thead>
              <tbody>
                <tr className="btn_modify" style={{ cursor: "pointer" }}>
                  <td>72</td>
                  <td>사내담당자</td>
                  <td>손승민</td>
                  <td>songa85</td>
                  <td>-</td>
                  <td>중지</td>
                </tr>
                <tr className="btn_modify" style={{ cursor: "pointer" }}>
                  <td>71</td>
                  <td>퍼블리셔</td>
                  <td>인라이플</td>
                  <td>nc</td>
                  <td>손승민</td>
                  <td>정상</td>
                </tr>
                <tr className="btn_modify" style={{ cursor: "pointer" }}>
                  <td>70</td>
                  <td>퍼블리셔</td>
                  <td>경향신문</td>
                  <td>toomics</td>
                  <td>손승민</td>
                  <td>정상</td>
                </tr>
                <tr className="btn_modify" style={{ cursor: "pointer" }}>
                  <td>69</td>
                  <td>퍼블리셔</td>
                  <td>경향신문</td>
                  <td>toomics</td>
                  <td>손승민</td>
                  <td>정상</td>
                </tr>
                <tr className="btn_modify" style={{ cursor: "pointer" }}>
                  <td>68</td>
                  <td>DSP</td>
                  <td>경향신문</td>
                  <td>toomics</td>
                  <td>손승민</td>
                  <td>정상</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Acount;
