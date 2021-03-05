import { gql } from "graphql-request";
export const GET_MUSICS = gql`
  query {
    musics {
      id
      title
      artist
      image
    }
  }
`;
export const GET_MUSIC = gql`
  query($id: ID!) {
    music(id: $id) {
      id
      title
      artist
      image
    }
  }
`;