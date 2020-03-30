import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatDate from "utils/formatDate";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  margin-bottom: 4%;
`;

const ItemImg = styled.img`
  border-radius: 10px;
  height: 55px;
  width: 55px;
  margin-right: 2.5%;
`;

const ItemMeta = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ItemName = styled.p`
  font-size: 1.25rem;
  margin: 0;
`;

const ItemOccupatation = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

const ItemDate = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

function CityDrawerListItem({ name, occupation, img, date_died }) {
  return (
    <ItemContainer>
      <ItemImg src={img} />
      <ItemMeta>
        <ItemName>{name}</ItemName>
        <ItemOccupatation>{occupation}</ItemOccupatation>
        <ItemDate>{`Died on: ${formatDate(date_died)}`}</ItemDate>
      </ItemMeta>
    </ItemContainer>
  );
}

CityDrawerListItem.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  img: PropTypes.string,
  date_died: PropTypes.instanceOf(Date),
};

CityDrawerListItem.defaultProps = {
  name: "Wendy Watson",
  occupation: "Doctor",
  img: "",
  date_died: Date.now(),
};

export default CityDrawerListItem;
