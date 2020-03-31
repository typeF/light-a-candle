import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CityDrawerListItem from "./CityDrawListItem/CityDrawerListItem";

const ListWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;
  color: #fff;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

function CityDrawerList({ memorials }) {
  return (
    <ListWrapper role="presentation">
      <List>
        {memorials.map(({ id, ...rest }) => (
          <CityDrawerListItem key={id} {...rest} />
        ))}
      </List>
    </ListWrapper>
  );
}

CityDrawerList.propTypes = {
  memorials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      occupation: PropTypes.string,
      img: PropTypes.string,
      date_died: PropTypes.instanceOf(Date),
    })
  ).isRequired,
};

export default CityDrawerList;
