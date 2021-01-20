import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({

    bg: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainContainer: {
        marginTop: (window.height) * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        marginTop: (window.width) * 0.02,
        marginBottom: (window.width) * 0.03,
        backgroundColor: "white",
        width: (window.width) * 0.9,
        height: (window.height) * 0.25,
        alignSelf: "center",
        borderRadius: (window.width) * 0.015,
        shadowColor: "#000",
        elevation: 5,
    },
    imageContainer: {
        width: (window.width) * 0.9,
        height: (window.height) * 0.3,
        marginBottom: (window.height) * 0.03,
    },
    image: {
        alignSelf: 'center',
        width: (window.width) * 0.9,
        height: (window.height) * 0.3,
        borderRadius: (window.width) * 0.01
    },
    trackNameContainer: {
        flexDirection: 'row',
        marginBottom: (window.height) * 0.05
    },
    trackName: {
        fontFamily: 'Quicksand-Bold',
        fontSize: (window.width) * 0.046,
        width: (window.width) * 0.9,
        textAlign: 'center'
    },
    detailContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: (window.height) * 0.025,
        width: (window.width) * 0.85
    },
    decoIcon: {
        color: '#808080'
    },
    detailText: {
        alignSelf: 'center',
        fontFamily: 'Quicksand-Medium',
        fontSize: (window.width) * 0.04,
        color: '#808080',
        marginLeft: (window.width) * 0.05
    },
});

export default styles;