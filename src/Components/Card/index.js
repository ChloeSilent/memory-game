import React, {useState} from 'react';
import styled from 'styled-components';
import FrontImg from '../../Assets/meow.jpg'

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
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
  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
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
`;

const Card = (props) => {
    const {img, alt, cat} = props;

    const [shown, setShown] = useState(false)
    const onClick = () => {
        setShown(!shown)
    }

    return (
        <CardItem onClick={onClick}>
            <CardInner>
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

export default Card;
