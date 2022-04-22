import './Quote.scss'

const Quote = ({ content }) => {
  const cssClass = 'Quote'

  return (
    <div className={cssClass}>
      <h4>{content.title}</h4>
    </div>
  )
}

export default Quote
