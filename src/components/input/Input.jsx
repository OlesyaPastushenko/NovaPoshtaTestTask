import { useEffect, useState } from "react"
import './input.css'
export default function Input ({fetchData, addItem, clearStatus,setError, histValue}) {

    const [validMess, setValidMess ] = useState('')
    const [value, setValue] = useState('')
    
    useEffect(()=> {
       setValue(histValue)
    }, [histValue])
 

    const onSubmitHandle = (value) => {
        let item = {
            value: value,
            id: Date.now()
        }
        const pattern = /^\d{14}$/
        !pattern.test(value) ? setValidMess('Потрібно ввести 14 цифр') :
        fetchData(value) && addItem(item)
        setValue('')
    }
    
    const onClickHandle = () => {
        clearStatus()
        setValidMess('')
        setError('')
    }


    return(
        <div className='inputWrap'>
            <div className="warningWrap">
            <input onClick={onClickHandle} value={value} onChange={(e)=>{setValue(e.target.value)}} type='text' className="input" placeholder="Номер ТТН"/>
            <p className="warning">{validMess}</p>
            </div>
            <button onClick={()=>onSubmitHandle(value)} className='btn'><span className='spnBtn1'>Перевірити статус</span><span className='spnBtn2'>Перевірити статус</span></button>
        </div>
    )
}