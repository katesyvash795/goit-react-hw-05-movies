// MoviesListStyles.js
import styled from 'styled-components';

export const StyledMoviesList = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #0077cc;
    transition: color 0.3s;

    &:hover {
      background-color:red;
      padding: 10px;
      color:white;
    }
  }
`;
