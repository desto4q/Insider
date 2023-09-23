import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import pickRandom from 'pick-random';
import Layout from 'react-masonry-list'
import { useInfiniteQuery, useQuery,QueryCache } from 'react-query';
import { userContext } from '../context/Context';
import { client, fetchPexels, query } from '../api/api';


const queryCache = new QueryCache()
function Feed({searchterm}) {
    let {currentwindow,searchparam,column,updateColumn} = useContext(userContext)   


    const {data,isLoading,isFetchingNextPage,fetchNextPage} = useInfiniteQuery({
    queryKey: ["content",searchparam],
    getNextPageParam: (page) => {
        return (page.page + 1)
    },
    queryFn:({pageParam = 1})=>{
            if (!searchterm) {
                return (fetchPexels(searchparam,pageParam))    
            }
            return (fetchPexels(searchterm,pageParam))    
        
    }})


    useEffect(()=>{
        console
        let onScroll = (e) => {
            let {scrollHeight,scrollTop }= e.target.documentElement
            let current = scrollTop + window.innerHeight
            if (current + 1 >= scrollHeight) {
                fetchNextPage()
            }
        }
        window.addEventListener("scroll",e=>{
            onScroll(e)
        })
        return () => window.removeEventListener("scroll",e=>{
            onScroll(e)
        })
    },[])


    useEffect(()=>{
        updateColumn()
    },[currentwindow])


    
    let {ret} = useRef()
       return (
        <div className="feed"  >
            {
            isLoading == true ?  <>isLoading</>:                
            <Layout colCount={column}  minWidth={20} className='masonry' items={data.pages.flatMap((data)=>{
                return data.photos
            }).map(({id,photographer,src,photographer_url,url})=>{
                
                return (
                    <Card key={id} id={id} user={photographer} img={src.medium} source={url} origin={photographer_url}/>
                )
            })}>
                                
            </Layout>
            }
            
        </div>
    )
  
}

export default Feed