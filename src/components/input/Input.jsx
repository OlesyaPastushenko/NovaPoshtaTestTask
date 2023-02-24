import Buttom from "../button/Button"
import './input.css'
export default function Input () {
    return(
        <div className='inputWrap'>
            <input type='text' className="input" placeholder="Номер ТТН"/>
            <Buttom text='Check TTN'/>
        </div>
    )
}