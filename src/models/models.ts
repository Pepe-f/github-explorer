export interface IResponse {
  items: IRepository[]
}

export interface IRepository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}
