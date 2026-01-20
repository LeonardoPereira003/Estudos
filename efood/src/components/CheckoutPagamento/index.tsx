import * as S from './styles'

// =====================
// PROPS DO PAGAMENTO
// =====================
type Props = {
    onBack: () => void
    onFinish: () => void
}

const CheckoutPagamento = ({ onBack, onFinish }: Props) => {
    return (
        <S.Overlay>
            <S.Container>
                <h2>Pagamento</h2>

                <form>
                    <label>Nome no cartão</label>
                    <input placeholder="Nome impresso no cartão" />

                    <label>Número do cartão</label>
                    <input placeholder="0000 0000 0000 0000" />

                    <S.Row>
                        <div>
                            <label>CVV</label>
                            <input placeholder="123" />
                        </div>

                        <div>
                            <label>Validade</label>
                            <input placeholder="MM/AA" />
                        </div>
                    </S.Row>

                    <S.Actions>
                        <button type="button" onClick={onFinish}>
                            Finalizar pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para entrega
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutPagamento
