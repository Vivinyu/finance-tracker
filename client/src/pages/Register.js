import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations';
import { useAuth } from '../contexts/AuthContext';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [register] = useMutation(REGISTER_USER);
  const { login: authLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({ variables: { email, password } });
      authLogin(data.register.token);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgImage="url('https://images.unsplash.com/photo-1565372912047-1b1dfdad26aa')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" color="lightGreen" textAlign="center">
            Create an Account
          </Text>
          <Text fontSize="lg" color="sandYellow" textAlign="center">
            Join us to manage your finances effectively
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              mt={6}
              w="full"
            >
              Register
            </Button>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Register;
