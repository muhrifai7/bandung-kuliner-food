import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Baner = () => {
  const [state, setState] = useState([
    {
      id: '2',
      image:
        'https://www.wisataliburan.com/wp-content/uploads/2019/11/Makanan-Malaysia-770x403.jpg',
      nama: 'Indonesian',
    },
    {
      id: '3',
      image:
        'https://static.tokopedia.net/blog/wp-content/uploads/2019/10/kuliner-turki-1-Dream.jpg',
      nama: 'International',
    },
    {
      id: '4',
      image:
        'https://d324bm9stwnv8c.cloudfront.net/article/20180912141312.922-37110372.jpg',
      nama: 'Japanese',
    },
    {
      id: '5',
      image:
        'https://img.okezone.com/content/2020/03/03/298/2177622/intip-menu-makanan-sehat-untuk-abk-observasi-korona-covid-19-GMNNuENnFW.jpg',
      name: 'Asian',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.kotaText}>Aneka Makanan</Text>
      <View style={styles.kotaContainer}>
        <FlatList
          horizontal={true}
          data={state} //take data from state,because state is reactiv variabel in react
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {}} style={styles.kotaItem}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.namaKota}>{item.nama}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Baner;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  kotaText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  kotaItem: {
    marginVertical: 13,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  namaKota: {
    color: 'black',
  },
  kotaContainer: {
    flexDirection: 'row',
  },
});
