

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Dados from './src/components/TextInput';
import Titulo from './src/components/Titulo';


export default function App() {
  return (
    <View style={styles.container}>
       <Titulo/>
       <Dados/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

});


