import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Footer from './components/Footer/Footer';
import LittleLemonHeader from './components/LittleLemonHeader/LittleLemonHeader';
import FlatListMenuItems from './components/MenuItems/FlatListMenuItems.js';
import SectionListMenuItems from './components/MenuItems/SectionListMenuItems';
import Login from './components/Login/Login';


import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App() {


  return (
<>
  <NavigationContainer>
    <View style={styles.container}>

      <LittleLemonHeader />
      <StatusBar style="auto" />
    
      <Drawer.Navigator 
      useLegacyImplementation  initialRouteName="Login"
        // screenOptions={{ headerStyle: { backgroundColor: '#FBDABB'} }}
      >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Login" component={Login} />

      </Drawer.Navigator>
    </View>

    <View style={styles.footerContainer}>
      <Footer />
    </View>

</NavigationContainer>
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
