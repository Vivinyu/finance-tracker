import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const BackButton = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <Button
      onClick={handleBack}
      colorScheme="teal"
      size="md"
      mt={4}
    >
      Back
    </Button>
  );
};

export default BackButton;
