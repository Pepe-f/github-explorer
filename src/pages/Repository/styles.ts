import styled from 'styled-components'

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: ${props => props.theme.colors.titleSecondary};
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: ${props => props.theme.colors.titleSecondary};
      }
      span {
        display: block;
        margin-top: 4px;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: ${props => props.theme.colors.shape};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    & + a {
      margin-top: 16px;
    }
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: ${props => props.theme.colors.titleSecondary};
      }
      p {
        font-size: 18px;
        color: ${props => props.theme.colors.titleSecondary};
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
    }
  }
`
