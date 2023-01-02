import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Footer from './components/Footer/Footer';
import LittleLemonHeader from './components/LittleLemonHeader/LittleLemonHeader';
import FlatListMenuItems from './components/MenuItems/FlatListMenuItems.js';
import SectionListMenuItems from './components/MenuItems/SectionListMenuItems';
import Login from './components/Login/Login';


import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImageBackground } from 'react-native';



const Drawer = createDrawerNavigator();

export default function App() {
  const image = require('./assets/little-lemon-background.png');

  return (
<>
  <NavigationContainer>
    <ImageBackground source={image} style={styles.container}>

      <StatusBar style="auto" />
    
      <Drawer.Navigator 
      useLegacyImplementation
      initialRouteName="Welocome"
      screenOptions={{ headerStyle: { backgroundColor: 'rgb(84, 193, 133)' } }}
      >
        <Drawer.Screen name="Welcome" component={WelcomeScreen}  />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Section list" component={SectionListMenuItems} />


      </Drawer.Navigator>
    </ImageBackground>

    {/* <View style={styles.footerContainer}>
      <Footer />
    </View> */}

</NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  footerContainer: {
    backgroundColor: 'rgb(74, 95, 88)',
  }
});
