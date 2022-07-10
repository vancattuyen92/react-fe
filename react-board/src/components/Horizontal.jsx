import React from 'react';
import styled from 'styled-components';

function Horizontal({ color }) {
  return (
    <HrStyled color={color} />
  )
}

export default Horizontal;

const HrStyled = styled.hr`
  color:  ${props => props.color || 'gray'};
  background-color: ${props => props.color || 'gray'};
`;
