    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
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

    display: flex;
    flex-direction: column;

    h2 {
        color: #fff;
        font-size: 16px;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
    }

    input {
        height: 32px;
        padding: 0 8px;
        border: none;
        font-size: 14px;
    }
    `

    /* 🔥 ESSE ERA O CARA QUE FALTAVA */
    export const Actions = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
        height: 32px;
        border: none;
        font-weight: 700;
        cursor: pointer;
    }

    button:first-child {
        background-color: #fff;
        color: #e66767;
    }

    button:last-child {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
    `
