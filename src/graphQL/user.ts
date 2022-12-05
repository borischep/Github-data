import { gql } from "@apollo/client/core";

export const SEARCH_USER = gql`
  query { 
    viewer { 
      login
      name
      avatarUrl
      status {
        message
      }
    }
  }
`;
