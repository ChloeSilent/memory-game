import React, {useState, pure} from 'react';
import styled from 'styled-components';

const CardItem = styled.li`
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
max-width: 140px;
max-height: 140px;
min-width: 140px;
min-height: 140px;
background: #fff;
position: relative;
perspective: 1000px;
transition: 0.6s;
`;


const Card = () => {

    return (
        <CardItem>

        </CardItem>
    );
};

export default Card;
