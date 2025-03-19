import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4361ee;
    --secondary-color: #3a0ca3;
    --accent-color: #f72585;
    --text-color: #2b2d42;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --success-color: #4cc9f0;
    --warning-color: #ffbd00;
    --danger-color: #f94144;
    --background-color: #ffffff;
    --gray-color: #e9ecef;
    --transition: all 0.3s ease-in-out;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-color);
    background-color: var(--background-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--secondary-color);
  }

  ul {
    list-style: none;
  }

  button, input, textarea {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    padding: 5rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    outline: none;
    
    &.btn-primary {
      background-color: var(--primary-color);
      color: white;
      &:hover {
        background-color: var(--secondary-color);
      }
    }
    
    &.btn-secondary {
      background-color: var(--secondary-color);
      color: white;
      &:hover {
        background-color: var(--primary-color);
      }
    }
    
    &.btn-accent {
      background-color: var(--accent-color);
      color: white;
      &:hover {
        opacity: 0.9;
      }
    }
    
    &.btn-outline {
      background-color: transparent;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      &:hover {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }

  .text-center {
    text-align: center;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-column {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles; 