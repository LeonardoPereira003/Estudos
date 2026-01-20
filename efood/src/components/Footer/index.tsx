import * as S from './styles'

import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                {/* LOGO */}
                <S.Logo src={logo} alt="efood" />

                {/* REDES SOCIAIS */}
                <S.Socials>
                    <a href="#" aria-label="Instagram">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </S.Socials>

                {/* TEXTO */}
                <S.Text>
                    A efood é uma plataforma para divulgação de estabelecimentos, a
                    responsabilidade pela entrega, qualidade dos produtos é toda do
                    estabelecimento contratado.
                </S.Text>
            </S.Container>
        </S.Footer>
    )
}

export default Footer
