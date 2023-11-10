import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';
import {
  Box,
  FormControl,
  Button,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
} from '@chakra-ui/react';
import image from '../img/main-bg.jpg';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log('hello');
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <Box
      flex="3"
      border="2px"
      bgImage={image}
      bgRepeat="no-repeat"
      bgPosition="top center"
      bgSize="cover"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          as="fieldset"
          isRequired
          maxWidth="400px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          margin="0 auto"
          padding="20px"
          gap="5px"
          border="2px solid gray"
          boxShadow="2xl"
          p="4"
          bg="#a6c9a6"
          rounded="md"
          mt="20"
        >
          <Stack direction="row" spacing={4}>
            <FormLabel m="0" width="90px">
              Email:
            </FormLabel>
            <Input
              id="unique-id1"
              bg="white"
              border="1px"
              borderColor="gray"
              width={80}
              {...register('email', { required: true })}
              type="email"
            />

            {errors.email && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </Stack>
          <Stack direction="row" spacing={4}>
            <FormLabel m="0" width="90px">
              Name:
            </FormLabel>
            <Input
              id="unique-id2"
              bg="white"
              border="1px"
              borderColor="gray"
              width={80}
              {...register('name', { required: true })}
              type="text"
            />
            {errors.email && (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </Stack>

          <Stack direction="row" spacing={4}>
            <FormLabel m="0" width="90px">
              Password:
            </FormLabel>
            <Input
              id="unique-id3"
              bg="white"
              border="1px"
              borderColor="gray"
              width={80}
              {...register('password', { required: true, minLength: 7 })}
              type="password"
            />
            {errors.password && (
              <FormErrorMessage>This field is required</FormErrorMessage>
            )}
          </Stack>

          <Button colorScheme="blackAlpha" type="submit">
            Sign Up
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RegisterPage;
