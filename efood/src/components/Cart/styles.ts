    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    `

    export const CartContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    width: 360px;
    height: 100vh;

    background-color: #e66767;
    padding: 32px 16px;

    display: flex;
    flex-direction: column;
    `

    export const CloseArea = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;

    color: #fff;
    font-size: 20px;
    cursor: pointer;
    `

    export const Items = styled.ul`
    list-style: none;
    margin-top: 32px;
    flex: 1;
    `

    export const Item = styled.li`
    background-color: #fff;
    padding: 8px;
    margin-bottom: 16px;

    display: flex;
    gap: 8px;
    align-items: center;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    div {
        flex: 1;

        h4 {
        font-size: 14px;
        margin-bottom: 4px;
        color: #e66767;
        }

        span {
        font-size: 14px;
        font-weight: 700;
        color: #e66767;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
    `

    export const Summary = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding-top: 16px;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        span {
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        }
    }

    button {
        width: 100%;
        background-color: #fff;
        color: #e66767;
        border: none;
        padding: 8px;
        font-weight: 700;
        cursor: pointer;
    }
    `
