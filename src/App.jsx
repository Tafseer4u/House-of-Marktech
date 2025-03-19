import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import UserList from './components/UserList/UserList';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header scrolled={isScrolled}>
        <div className="container">
          <Logo>House Of Marktech</Logo>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#users">Users</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
          <CallToAction>Get Started</CallToAction>
        </div>
      </Header>

      <Main>
        <section id="home">
          <Hero />
        </section>
        <Services />
        <Pricing />
        <UserList />
        <Contact />
      </Main>

      <Footer>
        <div className="container">
          <FooterContent>
            <FooterColumn>
              <h3>House Of Marktech</h3>
              <p>
                Providing innovative solutions for modern businesses since 2023.
              </p>
              <SocialLinks>
                <SocialLink href="#">
                  <span>📱</span>
                </SocialLink>
                <SocialLink href="#">
                  <span>💻</span>
                </SocialLink>
                <SocialLink href="#">
                  <span>📧</span>
                </SocialLink>
                <SocialLink href="#">
                  <span>📷</span>
                </SocialLink>
              </SocialLinks>
            </FooterColumn>

            <FooterColumn>
              <h4>Quick Links</h4>
              <FooterLinks>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#users">Users</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <h4>Services</h4>
              <FooterLinks>
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">Mobile App Development</a>
                </li>
                <li>
                  <a href="#services">E-Commerce Solutions</a>
                </li>
                <li>
                  <a href="#services">Data Analytics</a>
                </li>
                <li>
                  <a href="#services">Cybersecurity</a>
                </li>
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <h4>Contact Us</h4>
              <ContactInfo>
                <li>
                  <span>📍</span> 123 Business Avenue, Tech City
                </li>
                <li>
                  <span>📞</span> +1 (555) 123-4567
                </li>
                <li>
                  <span>📧</span> info@example.com
                </li>
              </ContactInfo>
            </FooterColumn>
          </FooterContent>

          <FooterBottom>
            <p>
              &copy; {new Date().getFullYear()} House Of Marktech. All rights
              reserved.
            </p>
            <FooterLinks className="horizontal">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </FooterLinks>
          </FooterBottom>
        </div>
      </Footer>
    </BrowserRouter>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) => (props.scrolled ? 'white' : 'transparent')};
  box-shadow: ${(props) => (props.scrolled ? 'var(--box-shadow)' : 'none')};
  transition: var(--transition);
  padding: 1rem 0;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0;
    background-color: white;
    box-shadow: var(--box-shadow);
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const CallToAction = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const Main = styled.main`
  min-height: 100vh;
`;

const Footer = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 4rem 0 1rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
  h3, h4 {
    margin-bottom: 1.5rem;
    color: white;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #ccc;
  }
`;

const FooterLinks = styled.ul`
  li {
    margin-bottom: 0.75rem;
    
    a {
      color: #ccc;
      transition: var(--transition);
      
      &:hover {
        color: var(--primary-color);
      }
    }
  }
  
  &.horizontal {
    display: flex;
    gap: 1.5rem;
    
    @media (max-width: 576px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: var(--transition);
  
  span {
    font-size: 1.2rem;
  }
  
  &:hover {
    background-color: var(--primary-color);
  }
`;

const ContactInfo = styled.ul`
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #ccc;
    
    span {
      font-size: 1.2rem;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: #ccc;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export default App; 