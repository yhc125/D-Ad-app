import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';
import RootNavigator from './navigator/RootNavigator';
import 'react-native-gesture-handler';
import utilities from './tailwind.json';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://barira.stepzen.net/api/ordered-waterbuffalo/__graphql',
  headers: {'Authorization':'apikey barira::stepzen.io+1000::39cc1475ac5a0177ba16d754f298f7b19c4c2fe4df1315aefa7c58d3c0eaa0a3'},
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>

  );
}
