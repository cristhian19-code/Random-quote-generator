import './ButtonAuthor.scss'

interface Author {
    quoteAuthor: string | null
    quoteGenre: string | null
    handleQuote: () => void
}

export const ButtonAuthor = (props: Author) => {
    const { quoteAuthor, quoteGenre, handleQuote } = props
    return (
        <div className="button" onClick={handleQuote}>
            <div className="button-content">
                <p className="button-content__author">{quoteAuthor}</p>
                <p className="button-content__genre">{quoteGenre}</p>
            </div>

            <div className="button-icon">
                <span className="material-icons">arrow_right_alt</span>
            </div>
        </div>
    )
}