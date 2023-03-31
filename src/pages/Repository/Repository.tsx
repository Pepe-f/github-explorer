import { FC } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import { Header, Issues, RepositoryInfo } from './styles'

const Repository: FC = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt='GitHub Explorer' />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Go back
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src='' alt='' />
          <div>
            <strong>Pepe-f/repository</strong>
            <p>Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1090</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>90</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>34</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to='/'>
          <div>
            <strong>asdfasdf</strong>
            <p>asdfasdf</p>
          </div>
          <FiChevronRight size={20} color='#cbcbd6' />
        </Link>
      </Issues>
    </>
  )
}

export default Repository
