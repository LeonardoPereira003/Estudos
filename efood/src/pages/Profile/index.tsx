import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/logo.png'
import pizzaImg from '../../assets/pizza.jpg'

import ProductModal from '../../components/ProductModal'
import Cart from '../../components/Cart'
import CheckoutEntrega from '../../components/CheckoutEntrega'
import CheckoutPagamento from '../../components/CheckoutPagamento'
import CheckoutConfirmacao from '../../components/CheckoutConfirmacao'
import Footer from '../../components/Footer'

import { addItem, clearCart } from '../../store/cartSlice'
import type { Product } from '../../types/Product'
import type { RootState } from '../../store'

type Etapa = 'cart' | 'entrega' | 'pagamento' | 'confirmacao'

const Profile = () => {
    const navigate = useNavigate()

    const [modalAberto, setModalAberto] = useState(false)
    const [painelAberto, setPainelAberto] = useState(false)
    const [etapa, setEtapa] = useState<Etapa>('cart')

    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    const quantidade = items.reduce(
        (acc, item) => acc + item.quantity,
        0
    )

    const produtoMock: Product = {
        id: 1,
        nome: 'Pizza Marguerita',
        descricao:
            'A clássica Marguerita: molho de tomate, mussarela derretida, manjericão fresco.',
        foto: pizzaImg,
        preco: 60.9,
        porcao: 'Serve: 2 pessoas'
    }

    function adicionarAoCarrinho() {
        dispatch(addItem(produtoMock))
        setModalAberto(false)
        setEtapa('cart')
        setPainelAberto(true)
    }

    function finalizarPedido() {
        dispatch(clearCart())
        setPainelAberto(false)
        setEtapa('cart')
        navigate('/')
    }

    return (
        <>
            {/* ================= HEADER ================= */}
            <S.TopBar>
                <S.TopBarContent>
                    <S.TopBarText>Restaurantes</S.TopBarText>

                    <S.Logo
                        src={logo}
                        alt="efood"
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    />

                    <S.TopBarText
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            setEtapa('cart')
                            setPainelAberto(true)
                        }}
                    >
                        {quantidade} produto(s) no carrinho
                    </S.TopBarText>
                </S.TopBarContent>
            </S.TopBar>

            {/* ================= HERO ================= */}
            <S.Hero>
                <S.HeroOverlay />

                <S.HeroInner>
                    <S.RestaurantType>Italiana</S.RestaurantType>
                    <S.RestaurantTitle>La Dolce Vita Trattoria</S.RestaurantTitle>
                </S.HeroInner>
            </S.Hero>

            {/* ================= PRODUTOS ================= */}
            <S.ProductsSection>
                <S.ProductsContainer>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <S.ProductCard key={index}>
                            <S.ProductImage src={pizzaImg} alt="Pizza Marguerita" />

                            <S.ProductInfo>
                                <h3>Pizza Marguerita</h3>
                                <p>
                                    A clássica Marguerita: molho de tomate,
                                    mussarela derretida, manjericão fresco.
                                </p>

                                <button onClick={() => setModalAberto(true)}>
                                    Adicionar ao carrinho
                                </button>
                            </S.ProductInfo>
                        </S.ProductCard>
                    ))}
                </S.ProductsContainer>
            </S.ProductsSection>

            {/* ================= MODAL ================= */}
            {modalAberto && (
                <ProductModal
                    onClose={() => setModalAberto(false)}
                    onAdd={adicionarAoCarrinho}
                />
            )}

            {/* ================= PAINEL LATERAL ================= */}
            {painelAberto && etapa === 'cart' && (
                <Cart
                    onClose={() => setPainelAberto(false)}
                    onNext={() => setEtapa('entrega')}
                />
            )}

            {painelAberto && etapa === 'entrega' && (
                <CheckoutEntrega
                    onBack={() => setEtapa('cart')}
                    onNext={() => setEtapa('pagamento')}
                />
            )}

            {painelAberto && etapa === 'pagamento' && (
                <CheckoutPagamento
                    onBack={() => setEtapa('entrega')}
                    onFinish={() => setEtapa('confirmacao')}
                />
            )}

            {painelAberto && etapa === 'confirmacao' && (
                <CheckoutConfirmacao onFinish={finalizarPedido} />
            )}

            <Footer />
        </>
    )
}

export default Profile
