import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Service card data
const serviceData = [
  {
    id: 1,
    icon: '💻',
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies to meet your business needs.',
  },
  {
    id: 2,
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
  },
  {
    id: 3,
    icon: '🛒',
    title: 'E-Commerce Solutions',
    description: 'Scalable and secure online stores with payment integration and inventory management.',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
  },
  {
    id: 5,
    icon: '🔐',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security solutions and audits.',
  },
  {
    id: 6,
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Optimize your infrastructure with cloud migration, hosting, and management services.',
  },
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <div className="container">
        <SectionHeader>
          <h2>Our Services</h2>
          <p>We offer a wide range of services to help your business succeed</p>
        </SectionHeader>
        
        <ServiceGrid>
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ServiceGrid>
      </div>
    </ServicesSection>
  );
};

const ServiceCard = ({ service }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Card ref={ref} className={inView ? 'animate' : ''}>
      <IconWrapper>{service.icon}</IconWrapper>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <LearnMoreButton>Learn More</LearnMoreButton>
    </Card>
  );
};

const ServicesSection = styled.section`
  background-color: var(--light-color);
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

const ServiceGrid = styled.div`
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
  text-align: center;
  
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    margin: 1.5rem 0 1rem;
    color: var(--primary-color);
  }
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const LearnMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
  
  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;

export default Services; 