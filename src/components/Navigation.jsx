import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import image from '../img/menu-nav-bg.jpg';

import { ReactComponent as IconPhone } from '../img/icon-home.svg';

import {
  selectAuthAuthenticated,
  selectAuthUserData,
} from 'redux/auth.selectors';
import { Box, ButtonGroup, Button, HStack, Icon, Text } from '@chakra-ui/react';
import { logOutThunk } from 'redux/authReducer';

import { Link } from 'react-router-dom';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const userName = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <header>
      <nav>
        <Box
          display="flex"
          flexDirection="column"
          border="2px"
          width={300}
          height="100vh"
          py={12}
          bgImage={image}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          mb={2}
        >
          <Link to="/">
            {' '}
            <HStack to="/" ml={5}>
              <Icon as={IconPhone} width="40" height="40" />

              <Text fontWeight="400" fontSize="24">
                Home
              </Text>
            </HStack>
          </Link>

          {authenticated ? (
            <>
              <ButtonGroup
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="4"
              >
                <Text fontWeight="600" fontSize="28">
                  {userName.name}
                </Text>

                <Link to="/login">
                  <Button
                    onClick={onLogOut}
                    colorScheme="blackAlpha"
                    width="40"
                  >
                    Log out
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button colorScheme="blackAlpha" width="40">
                    Contacts
                  </Button>
                </Link>
              </ButtonGroup>
            </>
          ) : (
            <>
              {' '}
              <ButtonGroup
                gap="4"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Link to="/login">
                  <Button colorScheme="blackAlpha" width="40">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button colorScheme="blackAlpha" width="40">
                    Register
                  </Button>
                </Link>
              </ButtonGroup>
            </>
          )}
        </Box>
      </nav>
    </header>
  );
};

export default Navigation;
