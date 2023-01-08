import styled from 'styled-components'

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`

export const NavItem = styled.li`
  list-style-type: none;
  font-size: 0.8em;

  a {
    text-decoration: none;
    letter-spacing: 0.15em;
    color: ${props => props.theme.pallete.primary.main};
    transition: 0.5s;

    :hover {
      color: ${props => props.theme.pallete.primary.description};
      transition: 0.5s;

      hr {
        width: 100%;
        transition: 0.5s;
      }
    }

    hr {
      display: none;
    }

    .active {
      color: ${props => props.theme.pallete.primary.main};
      display: block;
      width: 50%;
      transition: 0.5s;
    }
  }
`
