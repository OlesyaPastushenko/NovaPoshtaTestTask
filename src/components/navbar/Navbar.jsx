import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
export default function Navbar () {
    const [toggle, setToggle] = useState('true')
    
    useEffect(()=>{
        const location = window.location.pathname
        location != '/' && setToggle(false)    
    },[])

    return(
        <div className='nav'>
        <div className='navbarwrap'> 
            <div className='bkg' style={toggle ? {left:0} : {right:0}}></div>
            <Link to='/' className='link'>
            <div className={toggle ? "navActive left" : "navItem left"} onClick={()=>setToggle(true)}>Перевірити ТТН</div>
            </Link>
            <Link to='/list' className='link'>
            <div className={!toggle ? "navActive right" : "navItem right"} onClick={()=>setToggle(false)}>Список відділень</div>
            </Link>
        </div>
        </div>
    )
}