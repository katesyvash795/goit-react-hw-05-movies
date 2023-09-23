// MovieDetailsStyles.js
import styled from 'styled-components';
export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column`
export const Details = styled.div`
display:flex;
flex-direction:column`
export const MoviesDetails = styled.div`
display:flex;
img {
    width: 250px;
    height: auto;
    margin-right: 20px;
    border-radius: 5px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }

  h3 {
    font-size: 20px;
    margin-top: 20px;
  }

  a {
    font-size: 18px;
    margin-right: 20px;
  }
`
export const Additional = styled.div`
display: flex;
flex-direction: column;
width:1200px;
  align-items: center;
  margin: 20px;
  padding: 20px;
a {
  font-size: 18px;
  margin: 10px;
  text-decoration: none; /* Убрать подчеркивание у ссылок */
  color: #0077cc; /* Цвет ссылок */
  transition: color 0.3s; /* Плавное изменение цвета при наведении */
}

a:hover {
  background-color:red;
  padding:10px;
  color: white; /* Цвет ссылок при наведении */
}`
export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  margin: 20px;
  width: 1200px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  
  a {
    font-size: 18px;
    margin: 0 0 10px 0;
    text-decoration: none; /* Убрать подчеркивание у ссылок */
    color: #0077cc; /* Цвет ссылок */
    transition: color 0.3s; /* Плавное изменение цвета при наведении */
  }
  
  a:hover {
    background-color:red;
    padding:10px;
    color: white; /* Цвет ссылок при наведении */
  }`