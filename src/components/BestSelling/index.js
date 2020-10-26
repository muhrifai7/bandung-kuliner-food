import React, {useEffect, useState, useMemo} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';

import Gap from '../Gap';
import Button from '../Button';
import {getArticle} from '../../redux/ducks/action';

const BestSelling = ({data}) => {
  const [article, setArticle] = useState([]);
  const dispatch = useDispatch();
  const articleData = useSelector(
    (state) => state.articleStore.data,
    shallowEqual,
  );
  // useEffect(() => {
  //   dispatch(getArticle());
  //   fetchData();
  //   return () => {};
  // }, []);

  const fetchData = async () => {
    try {
      setArticle(articleData);
    } catch (error) {
      console.log(error, 'erorr');
    }
  };

  const Item = ({title, id}) => (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageBrand}
          source={{
            uri:
              'https://static.turbosquid.com/Preview/2016/07/04__14_12_56/1.png1099343B-CB1E-4859-808F-C8AB319102C6Large.jpg',
          }}
        />
      </View>
      <View>
        <Text>test</Text>
        <Text>test</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={[
            {
              completed: false,
              id: 168,
              title: 'recusandae quia qui sunt libero',
              userId: 9,
            },
            {
              completed: true,
              id: 169,
              title: 'ea odio perferendis officiis',
              userId: 9,
            },
          ]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default BestSelling;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 20,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBrand: {
    height: 120,
    width: 120,
  },
  content: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingTop: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subContent: {display: 'flex', flexDirection: 'row'},
  description: {
    backgroundColor: '#E7F2F8',
    width: '95%',
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    marginVertical: 10,
  },
});
