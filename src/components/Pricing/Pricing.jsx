import React from 'react';
import styled from 'styled-components';

// Pricing plan data
const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 39,
    features: [
      'Single Website',
      '5GB Storage',
      '10,000 Monthly Visitors',
      'Basic Analytics',
      'Email Support',
      '1 Team Member',
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: 99,
    features: [
      'Up to 5 Websites',
      '50GB Storage',
      '100,000 Monthly Visitors',
      'Advanced Analytics',
      'Priority Email Support',
      '5 Team Members',
      'Custom Domain',
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited Websites',
      '500GB Storage',
      'Unlimited Monthly Visitors',
      'Premium Analytics',
      '24/7 Phone Support',
      'Unlimited Team Members',
      'Custom Domain',
      'Dedicated Server',
      'Security Audit',
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <div className="container">
        <SectionHeader>
          <h2>Pricing Plans</h2>
          <p>Choose the perfect plan for your business needs</p>
        </SectionHeader>

        <PricingContainer>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} popular={plan.isPopular}>
              {plan.isPopular && <PopularBadge>Most Popular</PopularBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>
                <span className="currency">$</span>
                {plan.price}
                <span className="period">/month</span>
              </PlanPrice>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </PlanFeatures>
              <ChoosePlanButton popular={plan.isPopular}>
                Choose Plan
              </ChoosePlanButton>
            </PricingCard>
          ))}
        </PricingContainer>
      </div>
    </PricingSection>
  );
};

const PricingSection = styled.section`
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

const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PricingCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  position: relative;
  transition: var(--transition);
  border: 2px solid ${(props) => (props.popular ? 'var(--primary-color)' : 'var(--gray-color)')};
  transform: ${(props) => (props.popular ? 'scale(1.05)' : 'scale(1)')};
  z-index: ${(props) => (props.popular ? '1' : '0')};
  
  &:hover {
    transform: ${(props) => (props.popular ? 'scale(1.08)' : 'scale(1.03)')};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 991px) {
    transform: scale(1);
    margin-bottom: ${(props) => (props.popular ? '2rem' : '0')};
    
    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const PopularBadge = styled.span`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--accent-color);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
`;

const PlanName = styled.h3`
  font-size: 1.75rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
`;

const PlanPrice = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 2rem;
  position: relative;
  
  .currency {
    font-size: 1.5rem;
    position: relative;
    top: -20px;
  }
  
  .period {
    font-size: 1rem;
    font-weight: 400;
    color: #777;
  }
`;

const PlanFeatures = styled.ul`
  margin-bottom: 2rem;
  
  li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--gray-color);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ChoosePlanButton = styled.button`
  background-color: ${(props) => (props.popular ? 'var(--primary-color)' : 'transparent')};
  color: ${(props) => (props.popular ? 'white' : 'var(--primary-color)')};
  border: 2px solid var(--primary-color);
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
  max-width: 200px;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export default Pricing; 