import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import Main from './src/screens/Main';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {

  return (
    <GluestackUIProvider config={config} colorMode='dark' >
      <ExpoStatusBar
        style='light'
      />
      <Main/>
    </GluestackUIProvider>
  );
}
