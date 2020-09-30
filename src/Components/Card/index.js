import React from 'react';
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
background: #fff
`;

const Img = styled.img`
display: block;
max-width: 100%;
height: auto;
`;

const Card = (props) => {
    const {img, alt, cat } = props;
    return (
        <CardItem>
            <Img src={img} alt={alt} cat={cat}/>
        </CardItem>
    );
};

export default Card;
