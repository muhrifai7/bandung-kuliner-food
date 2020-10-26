import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dimensions} from 'react-native';

const Header = ({title, colors, size}) => {
  return (
    <View style={styles(colors, size).container}>
      <View style={styles.wraperTitle}>
        <Text style={styles.title}>{title}dsafsafsaf</Text>
      </View>
    </View>
  );
};

export default Header;

const screenHeight = Math.round(Dimensions.get('window').height);
const styles = (colors, size) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: screenHeight * 0.1,
      display: 'flex',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
      backgroundColor: colors,
    },
    wraperTitle: {
      marginHorizontal: 100,
      backgroundColor: 'red',
    },
    title: {
      fontSize: 3000,
      color: 'red',
    },
  });
