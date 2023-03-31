import { FC, FormEvent, useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'

import { IRepository, IResponse } from '../../models/models'

import { Error, Form, Repositories, Title } from './styles'

const Dashboard: FC = () => {
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storageRepositories = localStorage.getItem('repositories')

    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    }

    return []
  })
  const [searchValue, setSearchValue] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!repositories) {
      setInputError('Enter author/repository name')
      return
    }

    try {
      const response = await api.get<IResponse>(
        `/search/repositories?q=${searchValue}`
      )
      setRepositories([...response.data.items])
      setInputError('')
      setSearchValue('')
    } catch (e) {
      setInputError('Error searching for this repository')
    }
  }

  return (
    <>
      <img src={logoImg} alt='GitHub Explorer' />
      <Title>Explore repositories in GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <input
          placeholder='Enter the name of the repository'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button type='submit'>Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} color='#cbcbd6' />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
