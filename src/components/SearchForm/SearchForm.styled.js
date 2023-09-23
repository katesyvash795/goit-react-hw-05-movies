import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 4px;
    margin-right: 10px;
  }

  button {
    background-color:  #8B0000;
    color: black;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: white;
    }
  }
`;
