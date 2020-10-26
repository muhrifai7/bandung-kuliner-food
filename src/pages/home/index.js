import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import LoadingSekelaton from '../../components/LoadingSekelaton';
import BestSelling from '../../components/BestSelling';
import Header from '../../components/Header';

import {COLORS, FONTS, SIZES} from '../../constants';
import BanerFoot from '../../components/BanerFoot';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image_url:
      'https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg',
    content:
      'Use the color picker by clicking and dragging your cursor inside the picker area to',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image_url:
      'https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg',
    content:
      'Use the color picker by clicking and dragging your cursor inside the picker area to',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image_url:
      'https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg',
    content:
      'Use the color picker by clicking and dragging your cursor inside the picker area to',
  },
];

const Home = ({navigation}) => {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 3000);
  }, []);
  return (
    <ScrollView style={styles.box}>
      <View style={styles.container}>
        {/* <Header title="Beranda" size={35} colors={COLORS.primary} /> */}
        <View style={styles.containerSearch}>
          <Text style={styles.title}>Selamat Pagi</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profiles');
            }}>
            <Icon name="user" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <BanerFoot />
      <BestSelling data={DATA} />
      {/* {state ? <LoadingSekelaton data={DATA} /> :} */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  box: {
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'TrebuchetMS-Italic',
  },
  containerSearch: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
});
