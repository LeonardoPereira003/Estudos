    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
    `

    export const Modal = styled.div`
    background-color: #e66767;
    width: 1024px;
    max-width: 95%;
    position: relative;
    `

    export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;

    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    `

    export const Content = styled.div`
    display: flex;
    gap: 24px;
    padding: 32px;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
    `

    export const Info = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }

    span {
        font-size: 14px;
        margin-bottom: 24px;
    }

    button {
        background-color: #fff;
        color: #e66767;
        border: none;
        padding: 8px;
        font-weight: 700;
        cursor: pointer;
        width: fit-content;
    }
    `
