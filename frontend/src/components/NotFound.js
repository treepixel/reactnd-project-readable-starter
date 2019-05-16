import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Wrapper, ContentSection, Container, Box } from '../styles';

const NotFound = () => {
  return (
    <Wrapper>
      <Header />
      <ContentSection>
        <Container detail>
          <Box notFound>
            <h1>404</h1>
            <h2>Content Not Found</h2>
            <div className="box-button">
              <p>The page or resource you tried to use was not found</p>
              <Link to="/">Go to Home</Link>
            </div>
          </Box>
        </Container>
      </ContentSection>
    </Wrapper>
  );
};

export default NotFound;
