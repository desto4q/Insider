import React, { useContext, useEffect } from 'react'
import Layout from 'react-masonry-list'
import { userContext } from '../context/Context'
import { useInfiniteQuery } from 'react-query'
import { fetchPexels } from '../api/api'
import Feed from './Feed'

function Similar({searchparam}) {
    let {column,updateColumn,currentwindow} =   useContext(userContext)
    useEffect(()=>{
        updateColumn()
    },[currentwindow])

  
  return (
    
    <div className="similar">
      <h3>Similar</h3>
        <div className="container">
            <Feed searchterm={searchparam}/>
        </div>
    </div>
  )
}

export default Similar