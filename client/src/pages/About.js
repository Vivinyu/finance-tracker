import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box bg="lightGreen" minH="100vh" p={4} color="white">
      <VStack spacing={8} align="center">
        <Text fontSize="4xl" fontWeight="bold">
          About Us
        </Text>
        <Text fontSize="2xl" textAlign="center">
          We are committed to helping you achieve financial freedom through tracking and saving money effectively.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
