    import logo from '../../assets/logo.png'
    import * as S from './styles'

    const Header = () => {
    return (
        <S.Container>
        <S.Logo src={logo} alt="efood" />
        <S.Title>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
        </S.Title>
        </S.Container>
    )
    }

    export default Header
