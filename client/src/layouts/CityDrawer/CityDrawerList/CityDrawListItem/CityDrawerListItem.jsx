import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import formatDate from "utils/formatDate";
import placeHolderPortrait from "./placeholder-portrait.svg";

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

function CityDrawerListItem({ name, title, img, date_died, handleClick, ...rest }) {
  return (
    <ItemContainer>
      <ItemImg src={img === "" ? placeHolderPortrait : img} />
      <ItemMeta>
        <ItemName>{name}</ItemName>
        <ItemOccupatation>{title}</ItemOccupatation>
        <ItemDate>{`Died on: ${formatDate(date_died)}`}</ItemDate>
      </ItemMeta>
      <ProfileButton onClick={() => handleClick({ name, title, img, date_died, ...rest })}>
        <ChevronRightIcon fontSize="large" />
      </ProfileButton>
    </ItemContainer>
  );
}

CityDrawerListItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  workplace: PropTypes.string,
  city: PropTypes.string,
  province: PropTypes.string,
  country: PropTypes.string,
  dob: PropTypes.string,
  dod: PropTypes.string,
  date_died: PropTypes.instanceOf(Date),
  tribute: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

CityDrawerListItem.defaultProps = {
  name: "Wendy Watson",
  title: "Doctor",
  img: "",
  date_died: Date.now(),
};

export default CityDrawerListItem;
