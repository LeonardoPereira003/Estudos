// Estilos da página de Checkout
// Foco: layout fiel ao Figma (cores, espaçamentos, tipografia)

import styled from 'styled-components'

export const Container = styled.div`
    background-color: #e66767;
    min-height: 100vh;
    padding: 40px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    color: #fff;
    font-size: 24px;
    margin-bottom: 32px;
`

export const Form = styled.form`
    width: 100%;
    max-width: 360px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    label {
        color: #fff;
        font-size: 14px;
        margin-bottom: 4px;
    }

    input {
        height: 32px;
        padding: 0 8px;
        border: none;
        font-size: 14px;
    }
`

export const ButtonGroup = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
        height: 32px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        font-size: 14px;
    }

    button:first-child {
        background-color: #fff;
        color: #e66767;
    }

    button.secondary {
        background-color: #e66767;
        color: #fff;
        border: 1px solid #fff;
    }
`
