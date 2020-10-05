import React from 'react';
import styled from 'styled-components';
import Button from "../Button";

const Modal = styled.div`
  display: block; 
  position: fixed; 
  z-index: 600px; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: #fff; 
  `
const Message = styled.div`
width: 500px;
height: 400px;
background: #FBDCC7;
border-radius: 30px;
margin: 0 auto;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Text = styled.p`
margin: 0 auto 30px;
font-size: 30px;

`
const GameFinish = (props) => {
    return (
        <Modal>
            <Message>
                <Text>Well done!</Text>
                <Button onButtonClick={props.onPlayClick}>Play again</Button>
            </Message>
        </Modal>
    );
};

export default GameFinish;
