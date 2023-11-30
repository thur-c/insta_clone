import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import Main from './src/screens/Main';
import { StatusBar } from '@gluestack-ui/themed';

export default function App() {
  return (
    <>
      <StatusBar />
      <GluestackUIProvider config={config} colorMode='dark' >
        <Main/>
      </GluestackUIProvider>
    </>
  );
}
