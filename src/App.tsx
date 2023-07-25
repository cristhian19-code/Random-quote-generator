import { ButtonAuthor } from "./components/button/ButtonAuthor"
import { QuoteCard } from "./components/quote/Quote"

import './App.scss'
import { useQuotes } from "./hooks/useQuotes"
import { useEffect, useState } from "react"

function App() {
  const { quotes, getQuotesByName, getRandomQuote } = useQuotes()

  const [author, setAuthor] = useState<any>()

  useEffect(() => {
    if (quotes) {
      const { quoteAuthor, quoteGenre } = quotes[0]
      setAuthor({ quoteAuthor, quoteGenre })
    }
  }, [quotes])

  const handleGetQuotesByName = () => {
    getQuotesByName(author.quoteAuthor)
  }

  return (
    <>
      <div className="container-random">
        <button onClick={getRandomQuote} className="container-random__button">
          <p>random</p>
          <span style={{ fontSize: 20 }} className="material-icons">sync</span>
        </button>
      </div>
      <div className="container">
        {
          quotes?.map((quote) => (
            <QuoteCard key={quote._id} {...quote} />
          ))
        }

        {
          quotes?.length === 1 && (
            <ButtonAuthor handleQuote={handleGetQuotesByName} {...author} />
          )
        }
      </div>

      <footer className="footer">
        created by <b>cristhian19-code</b> - devChallenges.io
      </footer>
    </>
  )
}

export default App
