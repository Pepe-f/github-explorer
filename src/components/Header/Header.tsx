import { FC, useContext } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { ThemeContext } from 'styled-components'

import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

interface HeaderProps {
  toggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)
  const location = useLocation()

  return (
    <Container>
      <div>
        <img src={logoImg} alt='Github Explorer' />
        <ReactSwitch
          checked={title === 'dark'}
          onChange={toggleTheme}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor='#999'
          onHandleColor='#534F5E'
          offHandleColor='#534F5E'
          onColor='#F4EDE8'
        />
      </div>
      {location.pathname !== '/' && (
        <Link to='/'>
          <FiChevronLeft size={16} />
          Go back
        </Link>
      )}
    </Container>
  )
}

export default Header
