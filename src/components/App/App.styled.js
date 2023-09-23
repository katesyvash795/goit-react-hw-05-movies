import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin-right: 10px;
  font-weight: bold;
  &.active {
    color: white;
    background-color: red;
    padding: 10px;
  }
`;
export const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
  text-align: center;

  a {
    text-decoration: none;
    color: #fff;
    margin-right: 10px;
    font-weight: bold;

    &:hover {
      color: white;
      background-color: red;
      padding: 10px;
    }
  }
`;
