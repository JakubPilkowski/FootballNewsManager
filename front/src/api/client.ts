import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import typePolicies from './typePolicies';

const httpLink = createHttpLink({
  uri: 'http://881f-81-190-133-87.ngrok.io/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('authentication_token');
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies,
  }),
});

client.onResetStore(async () => {
  AsyncStorage.removeItem('authentication_token');
});

export default client;
