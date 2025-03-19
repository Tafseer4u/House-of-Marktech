import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Form is valid, simulate form submission
      setTimeout(() => {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Reset form submission status after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, 1000);
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionHeader>
          <h2>Contact Us</h2>
          <p>Get in touch with our team to discuss your project</p>
        </SectionHeader>
        
        <ContactContainer>
          <ContactInfo>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <div>
                <h4>Our Location</h4>
                <p>123 Business Avenue, Tech City, 12345</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📞</InfoIcon>
              <div>
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <div>
                <h4>Email Address</h4>
                <p>info@example.com</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>🕒</InfoIcon>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            {formSubmitted ? (
              <SuccessMessage>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </SuccessMessage>
            ) : (
              <>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="subject">Subject (Optional)</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
                </FormGroup>
                
                <SubmitButton type="submit">Send Message</SubmitButton>
              </>
            )}
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--primary-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.8rem;
  min-width: 40px;
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--gray-color);
    border-radius: 4px;
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
    }
    
    &.error {
      border-color: var(--danger-color);
    }
  }
`;

const ErrorMessage = styled.span`
  color: var(--danger-color);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: block;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  
  h3 {
    color: var(--success-color);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
  }
`;

export default Contact; 