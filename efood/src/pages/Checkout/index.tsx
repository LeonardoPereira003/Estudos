// Página de Checkout (Entrega do pedido)
// Parte 4 do projeto efood
// Neste momento: apenas layout (sem lógica e sem API)

import * as S from './styles'

const Checkout = () => {
    return (
        <S.Container>
            {/* TÍTULO DA ETAPA */}
            <S.Title>Entrega</S.Title>

            {/* FORMULÁRIO DE ENTREGA */}
            <S.Form>
                {/* NOME */}
                <S.Field>
                    <label htmlFor="name">Quem irá receber</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nome do recebedor"
                    />
                </S.Field>

                {/* ENDEREÇO */}
                <S.Field>
                    <label htmlFor="address">Endereço</label>
                    <input
                        id="address"
                        type="text"
                        placeholder="Rua, número e complemento"
                    />
                </S.Field>

                {/* CIDADE */}
                <S.Field>
                    <label htmlFor="city">Cidade</label>
                    <input
                        id="city"
                        type="text"
                        placeholder="Cidade"
                    />
                </S.Field>

                {/* CEP */}
                <S.Field>
                    <label htmlFor="zip">CEP</label>
                    <input
                        id="zip"
                        type="text"
                        placeholder="00000-000"
                    />
                </S.Field>

                {/* BOTÕES */}
                <S.ButtonGroup>
                    <button type="button">
                        Continuar com o pagamento
                    </button>

                    <button type="button" className="secondary">
                        Voltar para o carrinho
                    </button>
                </S.ButtonGroup>
            </S.Form>
        </S.Container>
    )
}

export default Checkout
