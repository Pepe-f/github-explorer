export interface IResponse {
  items: IRepository[]
}

export interface IRepository {
  full_name: string
  description: string
  html_url: string
  owner: {
    login: string
    avatar_url: string
  }
}
