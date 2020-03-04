import React from 'react';
import styled from 'styled-components';
const Box=styled.div`
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    display: inline-block;
`;
export default Box;