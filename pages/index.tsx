import Head from "next/head";
import { title } from "process";
import { GET_MUSICS } from "./api/musics/querys";
import { useGQLQuery } from "./api/useGQLQueries";
import { useForm } from "react-hook-form";
import { GraphQLClient } from "graphql-request";
import { CREATE_MUSIC, DELETE_MUSIC } from "./api/musics/mutations";
import Link from "next/link";

const endpoint = "http://localhost:3333/graphql";
const graphQLClient = new GraphQLClient(endpoint);

export default function Home() {
  const { data, refetch } = useGQLQuery("musics", GET_MUSICS, {});

  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
    createMusic(data);
    refetch();
  };

  const createMusic = async (data) => {
    await graphQLClient.request(CREATE_MUSIC, data);
    refetch();
  };

  const deleteMusic = async (id) => {
    await graphQLClient.request(DELETE_MUSIC, { id });
    refetch();
  };

  return (
    <div>
      <h1> Musics </h1>
      {data &&
        data.musics.map((music) => (
          <div key={music.id}>
            <Link href={`/music/${music.id}`}>
              <a>
                <h1> {music.title} </h1>
                <p> {music.artist} </p>
                <img src={music.image} width="200px"/>
              </a>
            </Link>

            <button onClick={() => deleteMusic(music.id)}> Delete </button>
          </div>
        ))}

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input type="text" name="title" ref={register} />
        <input type="text" name="artist" ref={register} />
        <input type="text" name="image" ref={register} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
