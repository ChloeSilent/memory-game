import React from 'react';
import styled from 'styled-components';
import FrontImg from '../../Assets/meow.jpg'

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => {
    return props.show ? 'rotateY(180deg)' : 'rotateY(0deg)'
  }}
`

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

const FrontSide = styled.div`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  border-radius: 10%;
`
const BackSide = styled.div`
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
  background: #fff;
`

const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

const Card = ({img, alt, cat, onCardClick, id, show}) => {

    return (
        <CardItem onClick={() => onCardClick(alt, id)}>
            <CardInner show={show}>
                <FrontSide>
                    <Img src={FrontImg} alt='meow'/>
                </FrontSide>
                <BackSide>
                    <Img src={img} alt={alt} cat={cat}/>
                </BackSide>
            </CardInner>
        </CardItem>
    );
};

function areEqual(prevProps, nextProps) {
    if (prevProps.show === nextProps.show) {
        return true;
    } else {
        return false;
    }
}

export default React.memo(Card, areEqual);
