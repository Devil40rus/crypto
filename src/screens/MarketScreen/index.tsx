import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import MarketCoin from '../../components/MarketCoin';
import styles from './styles';

const image = require('../../../assets/images/Saly-17.png');

const MarketCoins = [{
  id: '1',
  name: 'Virtual Dollars',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'USD',
  valueChange24H: -9.4,
  valueUSD: 69420
}, {
  id: '2',
  name: 'Bitcoin',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'USD',
  valueChange24H: 1.1,
  valueUSD: 59420
}, {
  id: '3',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  valueChange24H: 3.3,
  valueUSD: 3012
}];

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: '100%' }}
        data={MarketCoins}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Market</Text>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;