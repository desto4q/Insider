import React, { useContext, useEffect, useState } from 'react'
import {ImageDownloader} from "@samvera/image-downloader"
import {IconUserCircle,IconCaretDown} from "@tabler/icons-react"
import { userContext } from '../context/Context'
function Userdetails({name,link,options,url}) {
  
  
  let String= url.replace("https://www.pexels.com/photo/","").replace("/","")
  console.log(String)
  let {theme,toggletheme} = useContext(userContext)

  let [status,setStatus] = useState(false)
  
  

  return (
    <div className="userdetails">
        <div className="username">
            <IconUserCircle/>
            <div className="content">
              <p className='username'>{name}</p>
              <a href={link} target='_blank'>Follow .</a>
            </div>
        </div>
        <div className="download" onClick={()=>{
          setStatus(!status)
          console.log(status)
        }}>
          download <IconCaretDown/>
        <div name="" id="" className={
          status == false ? "none": "dropdown"
        }>
         { Object.entries(options).map((entry)=>{
              return(
                  <ImageDownloader
                  imageTitle={String}
                  imageUrl={entry[1]}
                  className={"my_dl"}
                >
                  {entry[0]}
                </ImageDownloader>
              )
            })}
        </div>
        </div>
       
    </div>
  )
}

export default Userdetails