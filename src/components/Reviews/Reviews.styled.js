import styled from 'styled-components';

export const ReviewCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width:1200px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
`;

 export const AuthorName = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ReviewContent = styled.p`
  font-size: 16px;
  color: black;
`;

export const NoReviewsMessage = styled.p`
  font-size: 18px;
  color: black;
`;
