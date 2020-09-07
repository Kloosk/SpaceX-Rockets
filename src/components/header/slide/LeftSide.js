import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {loadOn, moveDown, moveToDsc} from "../../../redux";

const Container = styled.div`
    width: 50%;
    height: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
`;
const Title = styled.h1`
 color: #D9D9D9;
 margin-bottom: 10px;
 font-size: 3rem
`;
const Dsc = styled.p`
 color: #D9D9D9;
 text-align: center;
 margin-bottom: 20px;
 font-size: 2rem;
`;
const Btn = styled.button`
   overflow: hidden;
   z-index: 2;
   position: relative;
   border: 1px solid #eeeeee;
   background: none;
   width: 180px;
   height: 65px;
   cursor: pointer;
   color: #eeeeee;
   transition: color 1s 1s ease;
   font-size: 2rem;
   &::before{
    content: '';
    z-index: 3;
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    transform: translateX(-102%);
    height: 8px;
    background-color: #777777;
    transition: transform 1s ease;
   }
   &::after{
    content: '';
    z-index: 3;
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #777777;
    transform: translateX(-102%);
    transition: transform 1s ease;
   }
   &:hover::after,&:hover::before{
    transform: translateX(0);
   }
   &:hover{
     color: #333333;
   }
`;
const Background = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 1px;
   width: 178px;
   height: 63px;
  background-color: #eeeeee;
  transform: translateX(100%);
  transition: transform 1s 1s ease;
  ${Btn}:hover &{
    transform: translateX(0);
   }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const LeftSide = props => {
    const dispatch = useDispatch();
    const clickView = () => {
        dispatch(moveToDsc());
    };
    const click3D = () => {
        dispatch(moveDown());
        setTimeout(() => {
            dispatch(loadOn());
        },2000);
    };
    return (
        <Container>
            <Title>{props.title}</Title>
            <Dsc>{props.dsc}</Dsc>
            <Flex>
                <Btn onClick={clickView}>
                    More
                    <Background></Background>
                </Btn>
                <Btn onClick={click3D}>
                    3D Model
                    <Background></Background>
                </Btn>
            </Flex>

        </Container>
    );
};

export default LeftSide;