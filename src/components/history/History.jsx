import './history.css'
export default function History ({array, clearStorage}) {
    return(
        <div className='hisWrap'>
            <span className='his'>Історія запитів</span>
            <div className='ttnWrap'>{
                array.map((el,i)=>{
                    return <div key={i}>{el}</div>
                })
            }</div>
            <button className='btn' onClick={clearStorage}><span className='spnBtn1'>Стерти</span><span className='spnBtn2'>Стерти</span></button>
            <div></div>
        </div>
    )
}