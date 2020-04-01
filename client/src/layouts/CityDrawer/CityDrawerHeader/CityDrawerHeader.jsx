import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatDate from "utils/formatDate";

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 6%;
  margin-bottom: 4%;
`;

const Heading = styled.p`
  font-size: 3rem;
  font-family: "Crimson Pro";
  font-weight: 300;
  color: #fff;
  margin: 0;
  margin-bottom: 2.5%;
`;

const SubText = styled.p`
  font-size: 1.4rem;
  font-weight: 100;
  color: #a5b9bd;
  margin: 0;
  margin-bottom: 0.5%;
`;

function CityDrawerHeader({ city, totalDeaths, date_updated }) {
  return (
    <Container>
      <Heading>{city}</Heading>
      <SubText>{`Deaths of healthcare workers reported: ${totalDeaths}`}</SubText>
      <SubText>{`Last update on: ${formatDate(date_updated)}`}</SubText>
    </Container>
  );
}

CityDrawerHeader.propTypes = {
  city: PropTypes.string,
  totalDeaths: PropTypes.number,
  date_updated: PropTypes.number,
};

CityDrawerHeader.defaultProps = {
  city: "New York",
  totalDeaths: 123,
  date_updated: Date.now(),
};

export default CityDrawerHeader;
