import { Flex, Container, Heading, Text } from '@chakra-ui/react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export function HomePage() {
  return (
    <Container
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexFlow='column'
      height='100vh'
    >
      <Flex
        alignItems='center'
        justifyContent='center'
      >
        <a
          href='https://vitejs.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </Flex>
      <Heading>Vite + React </Heading>
      <Text
        as='p'
        className='read-the-docs'
      >
        Click on the Vite and React logos to learn more
      </Text>
    </Container>
  );
}
