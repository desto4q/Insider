import { IconBell, IconNotification, IconSearch } from '@tabler/icons-react'
import React, { useContext } from 'react'
import { userContext } from '../context/Context'
import {IconUserCircle,IconSun,IconMoon} from "@tabler/icons-react"
import {Link} from "react-router-dom"


function Header() {
    let {searchparam,toggletheme,theme,setSearch,hero} = useContext(userContext)

    if (hero == false) {
      return(null)
    }
  return (
    <div className="header">
        <Link to={"/"} className="header_logo">
            <h2>IN</h2>pic
        </Link>
        <form className='search' onSubmit={e=>{
            e.preventDefault()
            console.log(e.target[0].value)
            setSearch(e.target[0].value)
        }
        }>
            
            <input type="text" placeholder='Search here....' name="" id="" />
            <button><IconSearch/></button>
            
        </form>
        <div className="toggle" onClick={()=>{
          toggletheme()
        }}>
          {theme == "light" ? <IconSun/> :
          <IconMoon/>}
        </div>
    </div>
  )
}

export default Header