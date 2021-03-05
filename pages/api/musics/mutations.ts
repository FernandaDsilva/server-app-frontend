import { gql } from "graphql-request";

export const CREATE_MUSIC = gql`
  mutation($title: String!, $artist: String!) {
    createMusic(input: {
      title: $title,
      artist: $artist
    }) {
      id
      title
      artist
    }
  }
`;

export const DELETE_MUSIC = gql`
  mutation($id: ID!) {
    deleteMusic( id: $id) 
  }
`;

export const UPDATE_MUSIC = gql`
  mutation($id: ID!, $title: String!, $artist: String!) {
    updateMusic(input: {
      id: $id,
      title: $title,
      artist: $artist
    }) {
      id
      title
      artist
    }
  }
`;