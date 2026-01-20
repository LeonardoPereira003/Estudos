    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    `

    export const Container = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    width: 360px;
    height: 100vh;

    background-color: #e66767;
    padding: 32px 16px;

    color: #fff;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 18px;
        margin-bottom: 24px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }

    button {
        margin-top: auto;
        background-color: #fff;
        color: #e66767;
        border: none;
        padding: 8px;
        font-weight: 700;
        cursor: pointer;
    }
    `
