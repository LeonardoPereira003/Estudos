import * as S from './styles'

// =====================
// PROPS DO CHECKOUT
// =====================
type Props = {
    onBack: () => void
    onNext: () => void
}

const CheckoutEntrega = ({ onBack, onNext }: Props) => {
    return (
        <S.Overlay>
            <S.Container>
                <h2>Entrega</h2>

                <form>
                    <label>Quem irá receber</label>
                    <input placeholder="Nome do recebedor" />

                    <label>Endereço</label>
                    <input placeholder="Rua, número e complemento" />

                    <label>Cidade</label>
                    <input placeholder="Cidade" />

                    <label>CEP</label>
                    <input placeholder="00000-000" />

                    <S.Actions>
                        <button type="button" onClick={onNext}>
                            Continuar com o pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para o carrinho
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutEntrega
