import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: (window.height) * 0.03,
        paddingBottom: (window.height) * 0.1,
    },
    searchBar: {
        width: (window.width) * 0.9,
        height: (window.height) * 0.07,
        alignSelf: 'center',
        marginTop: (window.height) * 0.03,
        borderRadius: (window.width) * 0.2,
        elevation: 2
    },
    listItem: {
        flexDirection: 'row',
        marginTop: (window.width) * 0.02,
        marginBottom: (window.width) * 0.03,
        backgroundColor: "white",
        width: (window.width) * 0.95,
        alignSelf: "center",
        borderRadius: (window.width) * 0.015,
        shadowColor: "#000",
        elevation: 2,
        padding: (window.width) * 0.03
    },
    artistImage: {
        width: (window.width) * 0.2,
        height: (window.width) * 0.2,
    },
    trackDeatils: {
        marginTop: (window.width) * 0.008,
        marginLeft: (window.width) * 0.05
    },
    trackContainer: {
        marginBottom: (window.height) * 0.015,
    },
    trackName: {
        fontFamily: 'Quicksand-Bold',
        fontSize: (window.width) * 0.045,
        width: (window.width) * 0.6,
    },
    decoIcon: {
        color: '#808080'
    },
    artistNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    artistName: {
        fontFamily: 'Quicksand-Bold',
        fontSize: (window.width) * 0.03,
        marginLeft: (window.width) * 0.025,
        color: '#808080'
    },
    collectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: (window.height) * 0.01
    },
    collectionName: {
        fontFamily: 'Quicksand-Medium',
        fontSize: (window.width) * 0.03,
        marginLeft: (window.width) * 0.025,
        width: (window.width) * 0.5,
        color: '#808080'
    },

});

export default styles;