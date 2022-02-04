import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './theme';
import { Home } from './pages/Home';
import { store } from './redux/store';

export function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
