import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import PortfolioCoin from '../../components/PortfolioCoin';
import styles from './styles';

const image = require('../../../assets/images/Saly-10.png');

const PortfolioCoins = [{
  id: '1',
  name: 'Virtual Dollars',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'USD',
  amount: 69.420,
  valueUSD: 69420
}, {
  id: '2',
  name: 'Bitcoin',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'USD',
  amount: 1.12,
  valueUSD: 59420
}, {
  id: '3',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '4',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '5',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '6',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '7',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '8',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '9',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '10',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}, {
  id: '11',
  name: 'Etherium',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  symbol: 'ETH',
  amount: 30,
  valueUSD: 3012
}]

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: '100%' }}
        data={PortfolioCoins}
        renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>PortfolioScreen</Text>
              <Text style={styles.balance}>$69.420</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;