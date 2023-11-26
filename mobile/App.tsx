import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Center, StatusBar } from "native-base";
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { AuthContextProvider } from './src/context/AuthContext';
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });
  console.log(fontsLoaded);

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>

        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {
          !fontsLoaded ? <Loading /> : <SignIn />
        }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}


