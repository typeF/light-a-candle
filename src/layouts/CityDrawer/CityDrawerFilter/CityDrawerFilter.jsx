import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Filters = styled.ul`
  width: 85%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 0;
  margin-bottom: 2.5%;
`;

const FilterText = styled.li`
  font-size: 0.75rem;
  color: #fff;
`;

const FilterTabs = styled.li`
  font-size: 0.75rem;
  color: ${(props) => (props.selected ? "#000" : "#fff")};
  width: 25%;
  height: 30px;
  background-color: ${(props) => (props.selected ? "#d9cdf0" : "transparent")};
  border: 1px solid #fff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CityDrawerFilter({ selected, handleClick, filters }) {
  return (
    <Filters>
      <FilterText>Sort by</FilterText>
      {filters.map((filter) => (
        <FilterTabs selected={selected === filter} onClick={() => handleClick(filter)} key={filter}>
          {filter}
        </FilterTabs>
      ))}
    </Filters>
  );
}

CityDrawerFilter.propTypes = {
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CityDrawerFilter;
