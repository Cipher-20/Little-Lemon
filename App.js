import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Footer from './components/Footer/Footer';
import LittleLemonHeader from './components/LittleLemonHeader/LittleLemonHeader';
import MenuItems from './components/MenuItems/MenuItems';

export default function App() {
  return (
<>
<View style={styles.container}>

    <LittleLemonHeader />
    <StatusBar style="auto" />

    {/* <WelcomeScreen /> */}

    <MenuItems />
</View>

<View style={styles.footerContainer}>
  <Footer />
</View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(74, 95, 88)',
  },
  footerContainer: {
    backgroundColor: 'rgb(74, 95, 88)',
  }
});
