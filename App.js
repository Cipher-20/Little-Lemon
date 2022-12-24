import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContentText from './components/ContentText/ContentText';
import Footer from './components/Footer/Footer';
import LittleLemonHeader from './components/LitleLemonHeader/LittleLemonHeader';

export default function App() {
  return (
<>
<View style={styles.container}>

  <View >
      <LittleLemonHeader />
      <StatusBar style="auto" />
  </View>

  <View >
    <ContentText />
  </View>

  <View >
    <Footer />
  </View>

</View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(74, 95, 88)',
  },
  footer: {
    marginBottom:0
  }
});
