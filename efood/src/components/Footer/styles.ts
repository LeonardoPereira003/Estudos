    import styled from 'styled-components'

    export const Footer = styled.footer`
    width: 100%;
    height: 298px;

    background-color: #fff1e4;

    display: flex;
    justify-content: center;
    align-items: center;
    `

    export const Container = styled.div`
    max-width: 1366px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    `

    export const Logo = styled.img`
    height: 36px;
    `

    export const Socials = styled.div`
    display: flex;
    gap: 8px;

    a {
        display: inline-flex;
    }

    img {
        width: 24px;
        height: 24px;
    }
    `

    export const Text = styled.p`
    max-width: 480px;

    font-size: 10px;
    line-height: 12px;
    text-align: center;

    color: #e66767;
    `
