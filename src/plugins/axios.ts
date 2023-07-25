import axios from "axios"

export const $axios = axios.create({
    baseURL: "https://quote-garden.onrender.com/api/v3/quotes",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})