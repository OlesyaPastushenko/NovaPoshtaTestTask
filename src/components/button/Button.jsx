import './button.css'
export default function Buttom ({text}) {
    return(
        <div> 
            <button className='btn'><span className='spnBtn1'>{text}</span><span className='spnBtn2'>{text}</span></button>
        </div>
    )
}