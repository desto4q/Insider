import React, { useContext, useEffect } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchPexels, getPhoto } from '../api/api'
import Userdetails from '../components/Userdetails'
import { IconLink } from '@tabler/icons-react'
import Similar from '../components/Similar'


function Imageid() {
    let {id} = useParams()

    let inView = document.querySelector(".main_img")

    let {
        data,isLoading
    } = useQuery(["photo",id],()=>{
        return getPhoto(id)
    })


    if (isLoading == true) {
      return <>loading</>
    }

    let string = data.url.replace("https://www.pexels.com/photo/","").replaceAll("-"," ").replace("/","").replace(/[0-9]/g, '').split(" ")[0];''


 
    if (isLoading == false) {
      
      return (
        <div className='photo'>
          <Userdetails name={data.photographer} link={data.photographer_url} url={data.url} options={data.src}/>
          <div className="container">
            <div className="to_original">
              <a href="">{data.photographer}</a>
              <a href=""><IconLink/></a>
            </div>
            <img className='main_img' src={data.src.portrait} alt="" />
          </div>
          <Similar searchparam={string} />
        </div>
      )
    }
  
}

export default Imageid