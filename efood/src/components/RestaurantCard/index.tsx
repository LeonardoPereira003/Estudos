// Importa o Link para navegação entre páginas
import { Link } from 'react-router-dom'

// Importa os estilos do card
import * as S from './styles'

// =====================
// TIPAGEM DAS PROPS
// =====================
type Props = {
    id: number              // 🔥 ID do restaurante
    title: string
    description: string
    image: string
    tag: string
    rating: number
}

// =====================
// COMPONENTE DO CARD
// =====================
const RestaurantCard = ({
    id,
    title,
    description,
    image,
    tag,
    rating
}: Props) => {
    return (
        <S.Card>
            {/* Imagem do restaurante */}
            <S.ImageWrapper>
                <S.Image src={image} alt={title} />
                <S.Tag>{tag}</S.Tag>
            </S.ImageWrapper>

            {/* Conteúdo do card */}
            <S.Content>
                <S.Header>
                    <S.Title>{title}</S.Title>

                    <S.Rating>
                        {rating}
                        <span>⭐</span>
                    </S.Rating>
                </S.Header>

                <S.Description>{description}</S.Description>

                {/* 
                    🔥 AGORA O ID É DINÂMICO
                    Navega corretamente para o Profile
                */}
                <Link to={`/restaurante/${id}`}>
                    <S.Button>Saiba mais</S.Button>
                </Link>
            </S.Content>
        </S.Card>
    )
}

export default RestaurantCard
