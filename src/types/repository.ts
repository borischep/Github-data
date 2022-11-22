export interface Repository {
  id: string;
  name: string;
  url: string;
  forkCount: number;
  stargazers: {
    totalCount: number;
  }
}
  