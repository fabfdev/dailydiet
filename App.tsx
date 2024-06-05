import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from './src/theme';

import { Loading } from '@components/Loading';
import { Home } from '@screens/Home';
import { StatisticsDetails } from '@screens/StatisticsDetails';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      { fontsLoaded ? <StatisticsDetails /> : <Loading /> }
    </ThemeProvider>
  );
}
