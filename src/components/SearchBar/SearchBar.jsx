import React, { useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  React.useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);
  
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchIcon>🔍</SearchIcon>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 0 auto 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--gray-color);
  border-radius: 50px;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #aaa;
  pointer-events: none;
`;

export default SearchBar; 