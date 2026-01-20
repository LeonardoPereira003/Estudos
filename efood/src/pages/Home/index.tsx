// Hooks do React
import { useEffect, useState } from 'react'

// Importa o Header
import Header from '../../components/Header'

// Importa o Footer
import Footer from '../../components/Footer'

// Importa o Card de restaurante
import RestaurantCard from '../../components/RestaurantCard'

// Serviço de API (axios configurado)
import { api } from '../../services/api'

// Tipagem oficial do restaurante
import type { Restaurant } from '../../types/Restaurant'


// =====================
// COMPONENTE HOME
// =====================
const Home = () => {
    // Estado que armazena os restaurantes vindos da API
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    // useEffect executa quando a página carrega
    useEffect(() => {
        // Faz requisição para a API da EBAC
        api
            .get('/restaurantes')
            .then((response) => {
                // Salva os dados no estado
                setRestaurants(response.data)
            })
            .catch((error) => {
                console.error('Erro ao buscar restaurantes:', error)
            })
    }, [])

    return (
        <>
            {/* HEADER */}
            <Header />

            {/* LISTA DE RESTAURANTES */}
            <section
                style={{
                    backgroundColor: '#FFF8F2',
                    padding: '80px 0'
                }}
            >
                {/* CONTAINER CENTRAL (FIGMA = 1024px) */}
                <div
                    style={{
                        maxWidth: '1024px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px'
                    }}
                >
                    {/* MAPEIA OS RESTAURANTES DA API */}
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            id={restaurant.id}
                            title={restaurant.titulo}
                            description={restaurant.descricao}
                            image={restaurant.capa}
                            tag={restaurant.tipo}
                            rating={restaurant.avaliacao}
                        />
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </>
    )
}

// Export obrigatório
export default Home
