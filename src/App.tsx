import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '~/routes';

import { theme } from '~/styles/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export { App };
