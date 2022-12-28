import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Footer from './components/Footer/Footer';
import LittleLemonHeader from './components/LittleLemonHeader/LittleLemonHeader';
import FlatListMenuItems from './components/MenuItems/FlatListMenuItems.js';
import SectionListMenuItems from './components/MenuItems/SectionListMenuItems';
import Login from './components/Login/Login';

export default function App() {
  return (
<>
<View style={styles.container}>

    <LittleLemonHeader />
    <StatusBar style="auto" />

    {/* <WelcomeScreen /> */}

    {/* <FlatListMenuItems /> */}

    {/* <SectionListMenuItems /> */}

    <Login />
</View>

{/* <View style={styles.footerContainer}>
  <Footer />
</View> */}

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
