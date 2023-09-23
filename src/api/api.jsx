let api_key = "6432835bb255422f68bea58c";
import { QueryClient, QueryClientProvider,  } from 'react-query';

export const queryClient = new QueryClient()



export let Provider = ({child}) =>{
    return(
        <QueryClientProvider client={queryClient}>
            {child}
        </QueryClientProvider>
    )
}

import { createClient } from 'pexels';
import axios from 'axios';

export const client = createClient('WStDJWqD19Roy6lguIFypImjyBkYSFBPzhLtw4E3JaSjaQoTrQhMcsim');
export const query = 'Nature';



export let fetchPexels = async (search,page) => {
    // if (!page) {
    //     page = 1
    // }
    if (search) {
        let query = search
        let res = await client.photos.search({ query, per_page: 30,page: page}).then(photos => {
            let ph= photos
            return ph
        });
        return(res)
    }
    
    let res = await client.photos.curated({per_page: 30, page: page}).then(media => {
        let ph = media
        return ph
        
        })
    return (res)  
}

export let getPhoto =  async (id) => {
    let res = await client.photos.show({id}).then(res => {
        return res
    })
    console.log(res)
    return(res)
}