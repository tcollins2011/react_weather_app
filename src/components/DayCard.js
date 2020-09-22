import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import styled from "styled-components";

const gray = "rgba(0, 0, 0, 0.125)";
const teal = "teal";
const border = `2px solid ${gray}`;
const tealBorder = `2px solid ${teal}`;
const DayWrapper = styled.article`
  text-align: center;
  :hover {
    cursor: pointer;
    .card {
      border: ${tealBorder};
    }
  }
  .card-body {
    padding: 20px 10px;
  }
  img {
    width: 85px;
    padding-bottom: 15px;
  }
  .card-header {
    background: ${(props) => (props.isActive ? teal : gray)};
    border-bottom: ${border};
    color: ${(props) => (props.isActive ? "white" : null)};
  }
  .card {
    border: ${(props) => (props.isActive ? tealBorder : border)};
  }
`;

const DayCard = ({
  day,
  description,
  high,
  low,
  icon,
  precip,
  temp,
  setSelectedDay,
  isActive,
}) => {
  return (
    <DayWrapper onClick={setSelectedDay} isActive={isActive}>
      <Card>
        <CardHeader>{day}</CardHeader>
        <CardBody>
          <h2>{temp.toFixed(0)}°</h2>
          <img
            src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
            alt={description}
          ></img>
          <p>
            <strong>High:</strong> {high.toFixed(0)}°
          </p>
          <p>
            <strong>Low:</strong> {low.toFixed(0)}°
          </p>
          <p>
            <strong>Precip: </strong>
            {precip}%
          </p>
        </CardBody>
      </Card>
    </DayWrapper>
  );
};

export default DayCard;
