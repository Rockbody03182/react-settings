import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const data = {
  // 주간날짜
  labels: ["January", "February", "March", "April", "May", "June", "July"],

  // 차트형태
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      data: [1, 2, 3, 4, 5],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(255, 99, 132)",
      data: [1, 2, 3, 4, 5, 6],
      borderColor: "red",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(75, 192, 192)",
      data: [1, 2, 3, 4, 5, 6],
    },
  ],
};
const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={7}>
          <ChartContainer className="card card-chart mb-2">
            <Line type="line" data={data} />
          </ChartContainer>
        </Col>
        <Col xs={5}></Col>
      </Row>
    </Container>
  );
};
export default Main;
const ChartContainer = styled.div`
  width: 90vw;
  max-width: 900px;
`;
