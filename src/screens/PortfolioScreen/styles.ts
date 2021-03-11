import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    image: {
        height: 175,
        resizeMode: 'contain'
    },
    balanceContainer: {
        marginVertical: 20,
        width: '100%'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold'
    }
});

export default styles;