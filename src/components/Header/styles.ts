import { lighten, shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    img {
      margin-right: 30px;
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.textSecondary};
    transition: color 0.3s;
    &:hover {
      color: ${props =>
        props.theme.title === 'dark'
          ? lighten(0.2, props.theme.colors.textSecondary)
          : shade(0.2, props.theme.colors.textSecondary)};
    }
    svg {
      margin-right: 4px;
    }
  }
`
