import React from 'react'
import ReactDOM from 'react-dom/client'

// Provider conecta o Redux ao React
import { Provider } from 'react-redux'

// Importa a store do Redux
import { store } from './store'

// Componente principal da aplicação
import App from './App'

// Estilos globais
import { GlobalStyle } from './styles/GlobalStyle'

// Cria a raiz da aplicação React
ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    {/* Provider disponibiliza o Redux para toda a aplicação */}
    <Provider store={store}>
      {/* Estilos globais */}
      <GlobalStyle />

      {/* Aplicação */}
      <App />
    </Provider>
  </React.StrictMode>
)
