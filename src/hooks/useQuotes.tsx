import { useEffect, useState } from "react"

import { Quote, Response } from "../interfaces/quotes.interface"

import { $axios } from "../plugins/axios"

export const useQuotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>()

    const getRandomQuote = async () => {
        const { data } = await $axios.get<Response>('/random')
        const getQuote = data.data

        setQuotes(getQuote)
    }

    const getQuotesByName = async (name: string) => {
        const { data } = await $axios.get<Response>(`?author=${name}`)
        const getQuote = data.data

        setQuotes(getQuote)
    }

    useEffect(() => {
        getRandomQuote()
    }, [])

    return {
        quotes,
        getQuotesByName,
        getRandomQuote
    }
}
