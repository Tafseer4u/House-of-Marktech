import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <HeroContent>
        <h1>Innovative Solutions for Modern Businesses</h1>
        <p>
          We provide cutting-edge technology services to help your business grow
          and succeed in today's competitive market.
        </p>
        <ButtonGroup>
          <Button className="btn-primary" to="/services">
            Our Services
          </Button>
          <Button className="btn-outline" to="/contact">
            Contact Us
          </Button>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 0;
  background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const HeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition);

  &.btn-primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: var(--secondary-color);
    }
  }
  
  &.btn-outline {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    
    &:hover {
      background-color: white;
      color: var(--dark-color);
    }
  }
`;

export default Hero; 