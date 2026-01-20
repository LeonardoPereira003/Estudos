    import styled from 'styled-components'

    export const Container = styled.header`
    width: 100%;
    height: 384px;

    /* Cor base do Hero */
    background-color: #ffebd9;

    /* Vector do Figma */
    background-image: url('/hero-bg.png');
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    position: relative;
    `

    /* Logo central */
    export const Logo = styled.img`
    width: 125px;
    height: auto;

    position: absolute;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    `

    /* Texto principal */
    export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 500; 
    line-height: 38px; 
    color: #e66767;

    text-align: center;
    max-width: 640px;

    position: absolute;
    top: 200px; 
    left: 50%;
    transform: translateX(-50%);
    `
