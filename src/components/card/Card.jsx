import './card.css'

export default function Card ({results}) {
    return(
        <div>
            {results.map(el=>{
                return <div className="cardWrap" key={el.SiteKey}>{el.Description}</div>
            })}
        </div>
    )
}