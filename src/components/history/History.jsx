
import './history.css'
export default function History ({array, clearStorage, fetchHistory}) {
    return(
        <div className='hisWrap'>
            <span className='hist'>Історія запитів</span>
            <div className='ttnWrap'>{
                array.map((el,i)=>{
                    return <div className='historyItem' key={el.id} onClick={()=>fetchHistory(el.value)}>{el.value}</div>
                })
            }</div>
            <button className='btn' onClick={clearStorage}><span className='spnBtn1'>Стерти</span><span className='spnBtn2'>Стерти</span></button>
            <div></div>
        </div>
    )
}
