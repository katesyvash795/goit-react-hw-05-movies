import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  gap: 20px;
  justify-content: center;
`;

export const ActorCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 120px;
    height: 180px;
    border-radius: 6px;
    object-fit: cover;
  }

  p {
    margin: 8px 0;
    font-weight: bold;
  }
`;
