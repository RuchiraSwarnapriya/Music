import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({

    headerContainer: {
        marginLeft: (window.width) * 0.02,
        marginTop: (window.width) * 0.02,
        marginRight: (window.width) * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: (window.width) * 0.07,
        fontFamily: 'Quicksand-Bold'
    },
   
});

export default styles;