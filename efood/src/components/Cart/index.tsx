import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { removeItem } from '../../store/cartSlice'

// =====================
// PROPS DO CARRINHO
// =====================
type Props = {
    onClose: () => void
    onNext: () => void
}

const Cart = ({ onClose, onNext }: Props) => {
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    const total = items.reduce(
        (acc, item) => acc + item.product.preco * item.quantity,
        0
    )

    return (
        <S.Overlay>
            <S.CartContainer>
                <S.CloseArea onClick={onClose}>×</S.CloseArea>

                {items.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    <>
                        <S.Items>
                            {items.map((item) => (
                                <S.Item key={item.product.id}>
                                    <img src={item.product.foto} alt={item.product.nome} />

                                    <div>
                                        <h4>{item.product.nome}</h4>
                                        <span>R$ {item.product.preco.toFixed(2)}</span>
                                    </div>

                                    <button
                                        onClick={() =>
                                            dispatch(removeItem(item.product.id))
                                        }
                                    >
                                        🗑️
                                    </button>
                                </S.Item>
                            ))}
                        </S.Items>

                        <S.Summary>
                            <div>
                                <span>Valor total</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>

                            <button onClick={onNext}>
                                Continuar com a entrega
                            </button>
                        </S.Summary>
                    </>
                )}
            </S.CartContainer>
        </S.Overlay>
    )
}

export default Cart
