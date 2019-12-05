import styled from 'styled-components';

export const Cardbox = styled.div `
    width: 24%;
    height: 34%;
    // height: calc(150vh)
    position:absolute;
    transform: rotateX(55deg) rotatey(0deg) rotateZ(45deg);
    box-shadow 13px 12px 15px -5px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: all 1s ease;
    transform-style: preserve-3d;
    overflow:hidden;
    .front, .back{
        position: absolute;
        width: 310px;
        height: 210px;
        backface-visibility:hidden;
    }
        .front img {
            width 410px;
            height: 310px;
        }
        .front:hover {
            // transform: rotateY(180deg);
            transform translate(-3%, -3%);
        }

`