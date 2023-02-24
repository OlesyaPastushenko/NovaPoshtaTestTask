import { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
export default function Navbar () {
    const [toggle, setToggle] = useState('true')
    let location = window.location.pathname
    console.log(toggle)

    return(
        <div className='nav'>
        <div className='navbarwrap'> 
            <Link to='/' className='link'>
            <div className={toggle ? "navActive" : "navItem"} onClick={()=>setToggle(true)}>Перевірити ТТН</div>
            </Link>
            <Link to='/list' className='link'>
            <div className={!toggle ? "navActive" : "navItem"} onClick={()=>setToggle(false)}>Список відділень</div>
            </Link>
        </div>
        </div>
    )
}