export interface IResponse {
  items: IRepository[]
}

export interface IRepository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

export interface IIssue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}
