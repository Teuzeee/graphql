import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React, { createContext, ReactNode, useContext, FC } from 'react';

// Initialize Apollo Client
const boris = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

// Define the type for the context value
interface ContextType {
  context: (query: string, model: string, data: object) => void;
}

// Create the context with a default value of null
const MainContext = createContext<ContextType | null>(null);

// Define the props for the provider component
interface MainProviderProps {
  children: ReactNode;
}

// Create the provider component
export const MainProvider: FC<MainProviderProps> = ({ children }) => {
  const context = (query: string, model: string, data: object) => {
    // Implementation of the context function
    console.log(query, model, data);
  };

  const value = { context };

  return (
    <MainContext.Provider value={value}>
      <ApolloProvider client={boris}>
        {children}
      </ApolloProvider>
    </MainContext.Provider>
  );
};

// Custom hook to use the MainContext
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
};

export const useMain = () => {
  const context = React.useContext(MainContext);
  if (!context) throw new Error('no MainContext')
  return context;
}
