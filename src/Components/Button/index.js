import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
background: #ECCCD7;
border: 2px solid #46301F;
border-radius: 30px;
color: #fff;
padding: 10px 36px;
font-family: 'Roboto';
outline: none;
font-size: 26px;
max-width: 200px;
&:hover{
background: #F0BBC1;
border: 2px solid #4F3420;
color: #4F3420
}
&:focus{
background: #F0BBC1;
border: 2px solid #4F3420;
color: #4F3420
}
`

const Button = (props) => {
    return (
        <Btn onClick={props.onButtonClick}>{props.children}</Btn>
    );
};

export default Button;
