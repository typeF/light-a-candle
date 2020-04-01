import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
  margin-right: 5%;
`;

const ItemMeta = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 100;
`;

const ItemName = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
`;

const ItemOccupatation = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: #a5b9bd;
`;

const ItemDate = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: #a5b9bd;
`;

const ProfileButton = styled.button`
  background: transparent;
  border: 0;
  color: white;
  margin-left: auto;
`;

function CityDrawerListItem({ name, occupation, img, date_died, handleClick }) {
  return (
    <ItemContainer>
      <ItemImg src={img} />
      <ItemMeta>
        <ItemName>{name}</ItemName>
        <ItemOccupatation>{occupation}</ItemOccupatation>
        <ItemDate>{`Died on: ${formatDate(date_died)}`}</ItemDate>
      </ItemMeta>
      <ProfileButton onClick={() => handleClick({ name, occupation, img, date_died })}>
        <ChevronRightIcon fontSize="large" />
      </ProfileButton>
    </ItemContainer>
  );
}

CityDrawerListItem.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  img: PropTypes.string,
  date_died: PropTypes.instanceOf(Date),
  handleClick: PropTypes.func.isRequired,
};

CityDrawerListItem.defaultProps = {
  name: "Wendy Watson",
  occupation: "Doctor",
  img: "",
  date_died: Date.now(),
};

export default CityDrawerListItem;
