
import React from 'react';
import { ChakraProvider, Container, Heading, Stack } from '@chakra-ui/react';
import Repositories from './components/Repositories';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" py="8">
        <Heading as="h1" size="xl" mb="6" textAlign="center" color="blue.500">
          GitHub Repositories
        </Heading>
        <Stack spacing="4">
          <ErrorBoundary>
            <Repositories />
          </ErrorBoundary>
        </Stack>
      </Container>
    </ChakraProvider>
  );
};

export default App;
