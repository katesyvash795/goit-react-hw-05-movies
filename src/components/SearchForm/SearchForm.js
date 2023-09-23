// SearchForm.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledForm } from './SearchForm.styled'; // Импортируем стили

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    params.set('query', searchTerm);
    navigate({ search: params.toString() });
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter a keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </StyledForm>
  );
};

export default SearchForm;
