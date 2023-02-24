import Buttom from '../../components/button/Button'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './checkttn.css'

export default function CheckTTN () {
    const [opacity, setOpacity] = useState(1) 
    const [margin, setMargin] = useState(400)
    useEffect(()=>{
        setOpacity(0)
        setMargin(0)
     },[])
    return(
        <div> 
        <div className='cover'>
        <div className='filter' style={{opacity: opacity}}></div>
        <Buttom text='Check TTN'/>
        </div>
        </div>
    )
}