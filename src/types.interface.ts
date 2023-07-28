export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers_url: string,
  repos_url: string,
  type: "User" | string,
}

export interface IRepository {
  id:number,
  node_id: string,
  name: string,
  full_name: string,
  private: boolean,
}