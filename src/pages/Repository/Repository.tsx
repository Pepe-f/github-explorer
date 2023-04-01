import { FC, useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { IIssue, IRepository } from '../../models/models'

import { Issues, RepositoryInfo } from './styles'

type RepositoryParams = {
  owner: string
  name: string
}

const Repository: FC = () => {
  const [repository, setRepository] = useState<IRepository | null>(null)
  const [issues, setIssues] = useState<IIssue[]>([])

  const { owner, name } = useParams<RepositoryParams>()

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get<IRepository>(`/repos/${owner}/${name}`),
        api.get<IIssue[]>(`/repos/${owner}/${name}/issues`)
      ])
      setRepository(repositoryResponse.data)
      setIssues(issuesResponse.data)
    }

    loadData()
  }, [name, owner])

  return (
    <>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a
            key={issue.id}
            href={issue.html_url}
            target='_blank'
            rel='noreferrer'
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} color='#cbcbd6' />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
