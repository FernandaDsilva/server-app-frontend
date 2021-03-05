import { gql } from "graphql-request";
export const GET_MUSICS = gql`
  query {
    musics {
      id
      title
      artist
    }
  }
`;
export const GET_MUSIC = gql`
  query($id: ID!) {
    music(id: $id) {
      id
      title
      artist
    }
  }
`;