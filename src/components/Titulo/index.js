

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


export default function Titulo() {
  return (
    <View style={styles.container}>
       <Text style={styles.titulo}>Calcule o IMC:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    paddingHorizontal: 24,
  },
  titulo:{
    fontSize:35,
    color: '#060606',
  }

});


