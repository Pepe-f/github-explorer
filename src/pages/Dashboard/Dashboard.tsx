import { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Form, Repositories, Title } from './styles'

const Dashboard: FC = () => {
  return (
    <>
      <img src={logoImg} alt='GitHub Explorer' />
      <Title>Explore repositories in GitHub</Title>
      <Form>
        <input placeholder='Enter the name of the repository' />
        <button type='submit'>Search</button>
      </Form>
      <Repositories>
        <a href='test'>
          <img
            src='https://avatars3.githubusercontent.com/u/50633599?v=4'
            alt='Elias Gabriel'
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Fodasi</p>
          </div>
          <FiChevronRight size={20} color='#cbcbd6' />
        </a>
        <a href='test'>
          <img
            src='https://avatars3.githubusercontent.com/u/50633599?v=4'
            alt='Elias Gabriel'
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Fodasi</p>
          </div>
          <FiChevronRight size={20} color='#cbcbd6' />
        </a>
        <a href='test'>
          <img
            src='https://avatars3.githubusercontent.com/u/50633599?v=4'
            alt='Elias Gabriel'
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Fodasi</p>
          </div>
          <FiChevronRight size={20} color='#cbcbd6' />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
