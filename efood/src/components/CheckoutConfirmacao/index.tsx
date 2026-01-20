import * as S from './styles'

type Props = {
    onFinish: () => void
}

const CheckoutConfirmacao = ({ onFinish }: Props) => {
    return (
        <S.Overlay>
            <S.Container>
                <h2>Pedido realizado - ORDER_ID</h2>

                <p>
                    Estamos felizes em informar que seu pedido já está em processo de
                    preparação e, em breve, será entregue no endereço fornecido.
                </p>

                <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados
                    a realizar cobranças extras.
                </p>

                <p>
                    Lembre-se da importância de higienizar as mãos após o recebimento do
                    pedido, garantindo assim sua segurança e bem-estar.
                </p>

                <p>
                    Esperamos que desfrute de uma deliciosa e agradável experiência
                    gastronômica. Bom apetite!
                </p>

                <button onClick={onFinish}>Concluir</button>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutConfirmacao
