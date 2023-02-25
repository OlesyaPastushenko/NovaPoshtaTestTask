import { useState } from "react"
import './input.css'
export default function Input ({fetchData, addItem, clearStatus}) {

    const [validMess, setValidMess ] = useState('')

 

    const onSubmitHandle = (value) => {
        const pattern = /^\d{14}$/
        !pattern.test(value) ? setValidMess('Потрібно ввести 14 цифр') :
        fetchData(value) && addItem(value)
        setValue('')
    }
    
    const onClickHandle = () => {
        clearStatus()
        setValidMess('')
    }

    const [value, setValue] = useState('')
    return(
        <div className='inputWrap'>
            <div>
            <input onClick={onClickHandle} value={value} onChange={(e)=>{setValue(e.target.value)}} type='text' className="input" placeholder="Номер ТТН"/>
            <p className="warning">{validMess}</p>
            </div>
            <button onClick={()=>onSubmitHandle(value)} className='btn'><span className='spnBtn1'>Перевірити статус</span><span className='spnBtn2'>Перевірити статус</span></button>
        </div>
    )
}