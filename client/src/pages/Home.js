import React from 'react';
import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
// const Home = () => (
//   <div>
//     <h1>Welcome to the Personal Finance Tracker</h1>
//   </div>
// );

// export default Home;
const Home = () => {
  const history = useHistory();

  const handleAboutUsClick = () => {
    history.push('/about');
  };

  return (
    <Box bg="sandYellow" minH="100vh" p={4} color="lightGreen">
      <VStack spacing={8} align="center">
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to Personal Finance Tracker
        </Text>
        <Text fontSize="2xl" textAlign="center">
          Track your expenses, save money, and achieve financial freedom
        </Text>
        <Image
          // 
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
          alt="Financial Freedom"
          boxSize="600px"
          objectFit="cover"
          borderRadius="lg"
        />
        <Button
          size="lg"
          colorScheme="teal"
          onClick={handleAboutUsClick}
        >
          About Us
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;