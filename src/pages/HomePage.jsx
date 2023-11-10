import React from 'react';
import image from '../img/main-bg.jpg';
import { Box, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      flex="3"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border="2px"
      bgImage={image}
      bgRepeat="no-repeat"
      bgPosition="top center"
      bgSize="cover"
    >
      <Text
        textAlign="center"
        fontWeight="600"
        fontSize="24"
        fontFamily="heading"
      >
        Store your most important contacts and stay connected with ease
      </Text>
    </Box>
  );
};

export default HomePage;
