import * as S from './styles'

const ProductCard = () => {
    return (
        <S.Card>
            {/* Placeholder da imagem */}
            <S.ImagePlaceholder />

            <S.Content>
                <h3>Pizza Marguerita</h3>

                <p>
                    A clássica Marguerita: molho de tomate,
                    mussarela derretida, manjericão fresco
                    e um toque de azeite.
                </p>

                <button>Adicionar ao carrinho</button>
            </S.Content>
        </S.Card>
    )
}

export default ProductCard
