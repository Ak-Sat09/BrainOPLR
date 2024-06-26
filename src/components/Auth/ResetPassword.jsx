import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, {   useState } from 'react'; 

const ResetPassword = () => {
  const [password, setPassword] = useState('');
 
 
  const submitHandler = e => {
   
  };

  
  return (
    <Container py={'16'} h="90vh">
      <form onSubmit={submitHandler}>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor="blue"
          />

          <Button
           
            type="submit"
            w={'full'}
            colorScheme="blue"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
