import { gql } from "graphql-request";

export const CREATE_MUSIC = gql`
  mutation($title: String!, $artist: String!, $image: String!) {
    createMusic(input: {
      title: $title,
      artist: $artist,
      image: $image
    }) {
      id
      title
      artist
      image
    }
  }
`;

export const DELETE_MUSIC = gql`
  mutation($id: ID!) {
    deleteMusic( id: $id) 
  }
`;

export const UPDATE_MUSIC = gql`
  mutation($id: ID!, $title: String!, $artist: String!, $image: String!) {
    updateMusic(input: {
      id: $id,
      title: $title,
      artist: $artist,
      image: $image
    }) {
      id
      title
      artist
      image
    }
  }
`;