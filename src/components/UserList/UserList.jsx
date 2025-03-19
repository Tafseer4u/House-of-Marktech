import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { fetchUsers, filterUsersByName } from '../../utils/api';
import SearchBar from '../SearchBar/SearchBar';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    getUsers();
  }, []);
  
  const handleSearch = (searchTerm) => {
    const filtered = filterUsersByName(users, searchTerm);
    setFilteredUsers(filtered);
  };
  
  return (
    <UserListSection id="users">
      <div className="container">
        <SectionHeader>
          <h2>Our Users</h2>
          <p>Search and filter through our user database</p>
        </SectionHeader>
        
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <LoadingMessage>Loading users...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : filteredUsers.length === 0 ? (
          <NoResultsMessage>No users found. Try a different search term.</NoResultsMessage>
        ) : (
          <UserGrid>
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </UserGrid>
        )}
      </div>
    </UserListSection>
  );
};

const UserCard = ({ user }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <Card ref={ref} className={inView ? 'animate' : ''}>
      <UserAvatar>
        <img 
          src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=fff&size=128`} 
          alt={user.name}
          loading="lazy"
        />
      </UserAvatar>
      <UserInfo>
        <h3>{user.name}</h3>
        <p>@{user.username}</p>
        <ContactInfo>
          <InfoItem>
            <span>📧</span> {user.email}
          </InfoItem>
          <InfoItem>
            <span>📱</span> {user.phone}
          </InfoItem>
          <InfoItem>
            <span>🌐</span> {user.website}
          </InfoItem>
        </ContactInfo>
        <CompanyInfo>
          <h4>Company</h4>
          <p>{user.company.name}</p>
          <p><em>"{user.company.catchPhrase}"</em></p>
        </CompanyInfo>
      </UserInfo>
    </Card>
  );
};

const UserListSection = styled.section`
  background-color: white;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    color: var(--secondary-color);
    font-size: 2.5rem;
    position: relative;
    margin-bottom: 1.5rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--accent-color);
    }
  }
  
  p {
    color: var(--text-color);
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  opacity: 0;
  transform: translateY(20px);
  
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 3px solid var(--primary-color);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  
  h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }
  
  p {
    color: #777;
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
  margin: 1.5rem 0;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  justify-content: center;
  
  span {
    font-size: 1rem;
  }
`;

const CompanyInfo = styled.div`
  background-color: var(--light-color);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  
  h4 {
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const ViewProfileButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--primary-color);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--danger-color);
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--text-color);
`;

export default UserList; 