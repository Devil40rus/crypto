import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const image = require('../../../assets/images/Saly-1.png');

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to crypto</Text>
      <Text style={styles.header2}>Invest your virtual $100.000 and complete with others</Text>
    </View>
  );
};

export default HomeScreen;