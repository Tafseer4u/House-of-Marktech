import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

//  Fetch all users from the JSONPlaceholder API
 
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const filterUsersByName = (users, searchTerm) => {
  if (!searchTerm) return users;
  
  const lowercasedSearchTerm = searchTerm.toLowerCase();
  return users.filter(user => 
    user.name.toLowerCase().includes(lowercasedSearchTerm) || 
    user.username.toLowerCase().includes(lowercasedSearchTerm)
  );
}; 