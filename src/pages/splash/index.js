import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SplashLogo} from '../../assets';
import {SIZES, FONTS, COLORS} from '../../constants';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 300);
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={SplashLogo}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styes = StyleSheet.create({});
