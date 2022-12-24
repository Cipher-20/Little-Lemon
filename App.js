import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Footer from './components/Footer/Footer';
import LittleLemonHeader from './components/LitleLemonHeader/LittleLemonHeader';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <LittleLemonHeader />
      <StatusBar style="auto" />

      <View style={styles.footer}>
        <Footer />
      
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(74, 95, 88)',
  },
  footer: {
    flex:1,
    marginTop:20
  }
});
