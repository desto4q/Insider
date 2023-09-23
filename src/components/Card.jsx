import { IconLink, IconUserCircle } from '@tabler/icons-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/Context'

function Card({card,img,title,user,userimg, origin,source,id}) {
  let {searchType} = useContext(userContext)
  
  return (
    <div className={"card"}>
      <div className="to_original">
        <div className='options'>
          <a className='person' href={origin} target='_blank'>
            {user}
          </a>
          <a href={source}  className='link' target='_blank'>
            <IconLink/>
          </a>
        </div>
      </div>
      <Link to={`/${id}`}>
        <img  className='main_img' loading='lazy' src={img} alt="" />
      </Link>
      <div className='user'>
        {title && <h4>{title}</h4>}
        {user && <div className='info'>{userimg ?
          <img src={userimg} alt="" /> :  <IconUserCircle/>
        } <p>{user}</p> </div>}
      </div>
    </div>
  )
}

export default Card