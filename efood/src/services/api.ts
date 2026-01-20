// src/services/api.ts
// Configuração central do Axios para a API Efood

import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-ebac.vercel.app/api/efood'
})
