import { gql } from "@apollo/client/core";

export const SEARCH_REPOS = gql`
  query ($number_of_repos: Int!) {
    viewer {
      name
      repositories(last: $number_of_repos) {
        nodes {
          id
          name
          url
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
