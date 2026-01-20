    import styled from 'styled-components'

    export const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e66767;
    overflow: hidden;
    `

    /* Wrapper da imagem (para tags em cima) */
    export const ImageWrapper = styled.div`
    position: relative;
    `

    /* Imagem do restaurante */
    export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
    background-color: #f2f2f2;
    `

    /* Tag no canto superior direito */
    export const Tag = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;

    background-color: #e66767;
    color: #ffffff;

    font-size: 12px;
    font-weight: 700;
    padding: 4px 6px;
    `

    export const Content = styled.div`
    padding: 8px;
    `

    /* Cabeçalho do card (título + nota) */
    export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    `

    export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    `

    export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 700;
    color: #e66767;
    `

    /* Descrição – igual ao Figma */
    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: #666666;
    margin-bottom: 8px;
    `

    export const Button = styled.button`
    background-color: #e66767;
    color: #ffffff;

    border: none;
    padding: 4px 8px;

    font-size: 14px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
    `
