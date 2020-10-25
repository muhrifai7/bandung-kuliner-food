import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PaymentGateway from 'react-native-payment-gateway';

const Home = () => {
  const payment = async () => {
    try {
      const optionConect = {
        clientKey: 'SB-Mid-client-Qn-opZodkJstvvC8',
        urlMerchant: 'https://merchant-url-sandbox.com//',
      };

      const transRequest = {
        transactionId: '0001',
        totalAmount: 4000,
      };

      const itemDetails = [{id: '001', price: 1000, qty: 4, name: 'peanuts'}];

      const creditCardOptions = {
        saveCard: false,
        saveToken: false,
        paymentMode: 'Normal',
        secure: false,
      };

      const userDetail = {
        fullName: 'jhon',
        email: 'jhon@payment.com',
        phoneNumber: '0850000000',
        userId: 'U01',
        address: 'street coffee',
        city: 'yogyakarta',
        country: 'IDN',
        zipCode: '59382',
      };

      const optionColorTheme = {
        primary: '#c51f1f',
        primaryDark: '#1a4794',
        secondary: '#1fce38',
      };

      const optionFont = {
        defaultText: 'open_sans_regular.ttf',
        semiBoldText: 'open_sans_semibold.ttf',
        boldText: 'open_sans_bold.ttf',
      };

      const callback = (res) => {
        console.log(res);
      };

      PaymentGateway.checkOut(
        optionConect,
        transRequest,
        itemDetails,
        creditCardOptions,
        userDetail,
        optionColorTheme,
        optionFont,
        callback,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={payment}>
        <Text>Bayar oke</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styes = StyleSheet.create({});
