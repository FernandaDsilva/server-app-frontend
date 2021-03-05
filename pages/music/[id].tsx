import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import { useForm } from "react-hook-form";
import { GraphQLClient, request } from "graphql-request";
import { GET_MUSIC } from '../api/musics/querys';
import { UPDATE_MUSIC } from '../api/musics/mutations';



const endpoint = "http://localhost:3333/graphql";
const graphQLClient = new GraphQLClient(endpoint);

const Music = () => {
     const router = useRouter()  

     const [music, setMusic] = useState({title: '', artist:''})

    const { id } = router.query 

    useEffect(() => {
        request(endpoint, GET_MUSIC, {id}).then((response) =>setMusic (response.music))
    }, [])

    const { register, handleSubmit } = useForm();

    const onSubmitForm = (data) => {
    console.log(data);
    updateMusic(data);
    router.back();
  };

    const updateMusic = async (data) => {
    await graphQLClient.request(UPDATE_MUSIC, {...data, id});
    
  };

  return  ( 
    <div> 
            <p>music {music&&music.title} </p>
            <form onSubmit={handleSubmit(onSubmitForm)}>
            <input type="text" name="title" ref={register} defaultValue={music?music.title:''} />
            <input type="text" name="artist" ref={register} defaultValue={music?music.artist:''} />
            <input type="submit" value="submit" />
            </form>           
    </div>
)
}

export default Music