import React from 'react';
import { Box, Button, Image, Flex, Text, Heading, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

//   return (
//     <Box bg="sandYellow" minH="100vh" p={4} color="lightGreen">
//       <VStack spacing={8} align="center">
//         <Text fontSize="4xl" fontWeight="bold">
//           Welcome to Personal Finance Tracker
//         </Text>
//         <Text fontSize="2xl" textAlign="center">
//           Track your expenses, save money, and achieve financial freedom
//         </Text>
//         <Image
//           // 
//           src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
//           alt="Financial Freedom"
//           boxSize="600px"
//           objectFit="cover"
//           borderRadius="lg"
//         />
//         <Button
//           size="lg"
//           colorScheme="teal"
//           onClick={handleAboutUsClick}
//         >
//           About Us
//         </Button>
//       </VStack>
//     </Box>
//   );
// };
return (
  <Flex
    direction="column"
    align="center"
    justify="center"
    minH="100vh"
    bgImage="url('https://images.unsplash.com/photo-1565372912047-1b1dfdad26aa')"
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    color="white"
  >
    <Box bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="lg" textAlign="center">
      <Heading mb={4} color="lightGreen">
        Welcome to Finance Tracker
      </Heading>
      <Text fontSize="xl" mb={8} color="sandYellow">
        Manage your finances effectively and achieve financial freedom.
      </Text>
      <VStack spacing={4}>
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
        <Button
          as={Link}
          to="/login"
          colorScheme="teal"
          size="lg"
          w="full"
        >
          Log In
        </Button>
        <Button
          as={Link}
          to="/register"
          colorScheme="teal"
          size="lg"
          w="full"
        >
          Register
        </Button>
      </VStack>
    </Box>
  </Flex>
);
};
export default Home;