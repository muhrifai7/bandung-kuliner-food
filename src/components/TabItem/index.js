import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {
  Course,
  CourseActive,
  HomeActive,
  Message,
  MessageActive,
  User,
  UserActive,
} from '../../assets';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants';

const TabItem = ({onPress, onLongPress, options, isFocused, label}) => {
  const Icon = () => {
    if (label === 'Beranda') return <HomeActive width={20} height={20} />;
    if (label === 'Cari') return <CourseActive width={20} height={20} />;
    if (label === 'Pesanan') return <MessageActive width={20} height={20} />;
    if (label === 'Profiles') return <UserActive width={20} height={20} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={{color: isFocused ? COLORS.primary : 'black'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
