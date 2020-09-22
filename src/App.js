import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import SearchBar from "./components/Searchbar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import API from "./utils/API";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    location: "",
    days: [],
    // location: "Denver, CO",
    // days: sampleData.data,
    selectedDay: null,
    searchTerm: "",
  });

  const { location, days, selectedDay, searchTerm } = weatherInfo;

  const weatherSearch = (location) => {
    API.getWeather(location)
      .then(({ data }) =>
        setWeatherInfo({
          location: data.city_name + ", " + data.state_code,
          days: data.data,
          selectedDay: null,
          searchTerm: "",
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    weatherSearch("Denver, CO");
  }, []);

  const handleInputChange = (e) => {
    setWeatherInfo({ ...weatherInfo, searchTerm: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    weatherSearch(searchTerm);
  };
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          ></SearchBar>
        </Col>
      </Row>
      <Row>
        {days.map((day) => (
          <Col key={day.valid_date}>
            <DayCard
              icon={day.weather.icon}
              description={day.weather.description}
              high={day.high_temp}
              low={day.low_temp}
              temp={day.temp}
              precip={day.pop}
              day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
              setSelectedDay={() =>
                setWeatherInfo({ ...weatherInfo, selectedDay: day })
              }
              isActive={day === selectedDay}
            ></DayCard>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          {selectedDay ? (
            <DayDetails
              icon={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              high={selectedDay.high_temp}
              low={selectedDay.low_temp}
              temp={selectedDay.temp}
              precip={selectedDay.pop}
              day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("LL")}
              humidity={selectedDay.rh}
              appHigh={selectedDay.app_max_temp}
              appLow={selectedDay.app_min_temp}
              windDir={selectedDay.wind_cdir_full}
              windSpd={selectedDay.wind_spd}
            ></DayDetails>
          ) : (
            <h3>Click on a day to get day details!</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
