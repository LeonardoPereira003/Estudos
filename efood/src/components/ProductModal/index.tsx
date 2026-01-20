import * as S from './styles'
import pizzaImg from '../../assets/pizza.jpg'

// Props recebidas do Profile
type Props = {
    onClose: () => void      // fecha o modal
    onAdd: () => void        // adiciona item ao carrinho
}

const ProductModal = ({ onClose, onAdd }: Props) => {
    return (
        <S.Overlay>
            <S.Modal>
                {/* Botão de fechar */}
                <S.CloseButton onClick={onClose}>×</S.CloseButton>

                <S.Content>
                    {/* Imagem do produto */}
                    <img src={pizzaImg} alt="Pizza Marguerita" />

                    {/* Informações do produto */}
                    <S.Info>
                        <h3>Pizza Marguerita</h3>

                        <p>
                            A clássica Marguerita: molho de tomate suculento,
                            mussarela derretida, manjericão fresco e um toque de azeite.
                        </p>

                        <span>Serve: 2 pessoas</span>

                        {/* Botão que adiciona ao carrinho */}
                        <button onClick={onAdd}>
                            Adicionar ao carrinho
                        </button>
                    </S.Info>
                </S.Content>
            </S.Modal>
        </S.Overlay>
    )
}

export default ProductModal
