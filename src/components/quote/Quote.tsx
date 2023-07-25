import { Quote } from '../../interfaces/quotes.interface'
import './Quote.scss'



export const QuoteCard = (props: Quote) => {
    const { quoteText } = props
    return (
        <div className="quote">
            <blockquote className="quote-content">"{quoteText}"</blockquote>
        </div>
    )
}