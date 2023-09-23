import { IconSearch,IconSun,IconMoon } from '@tabler/icons-react'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { userContext } from '../context/Context'

function Hero() {
  let {hero,setHero,setSearch,theme,toggletheme} = useContext(userContext)
  let observe = new IntersectionObserver((entrie)=>{
    entrie.forEach(entry=>{
      if (entry.isIntersecting == true ) {
        setHero(false)
      }
      else  {
        setHero(true)
      }
    })
  },{})

  useEffect(()=>{
    let myhero = document.querySelector(".hero")
    if (myhero) {
      observe.observe(myhero,[])
    }
  },[hero])
  


  return (
    <div className="hero">
      <div className="header">
        <span className='header_logo'>
          <h2>In</h2>pic
        </span>
        <div className="toggle" onClick={()=>{
          toggletheme()
        }}>
          {theme == "light" ? <IconSun/> :
          <IconMoon/>}
        </div>
      </div>
      <img src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className='background ' alt="" />
      <div className="hero_info">
        <h2>The best free stock photos, royalty free images & videos shared by creators.</h2>
        <form action="" onSubmit={((e)=> {
          e.preventDefault()
          setSearch(e.target[0].value)

        })} className='search'>
          <input placeholder='Search here...' type="text" name="" id="" /> 
          <button><IconSearch/></button>
        </form>
          
      </div>
    </div>
  )
}

export default Hero