import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';
import Header from '../../components/header/header';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

const Artist = ({ route, navigation }) => {


    const window = Dimensions.get('window');

    const { image, trackName, collectionName, artistName, price, releaseDate } = route.params;

    const date = moment(releaseDate).format('DD/MM/YYYY  HH:mm');

    console.log(price)

    return (
        <View style={styles.bg}>
            <Header navigation={navigation} title={'Track Details'} />
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
                </View>
                <View style={styles.trackNameContainer}>
                    {trackName === undefined ?
                        <Text style={styles.trackName}>Track Name Unavalaible</Text> :
                        <Text style={styles.trackName}>{trackName}</Text>
                    }
                </View>
                <View style={styles.detailContiner}>
                    <MatIcons name="library-music" style={styles.decoIcon} size={(window.width) * 0.06} />
                    {collectionName === undefined ?
                        <Text style={styles.detailText}>Collection Unavalaible</Text> :
                        <Text style={styles.detailText}>{collectionName}</Text>
                    }
                </View>
                <View style={styles.detailContiner}>
                    <MatIcons name="person" style={styles.decoIcon} size={(window.width) * 0.06} />
                    {artistName === undefined ?
                        <Text style={styles.detailText}>Artist Unavalaible</Text> :
                        <Text style={styles.detailText}>{artistName}</Text>
                    }
                </View>
                <View style={styles.detailContiner}>
                    <MatIcons name="attach-money" style={styles.decoIcon} size={(window.width) * 0.06} />
                    {price === undefined ?
                        <Text style={styles.detailText}>Price Unavalaible</Text> :
                        <Text style={styles.detailText}>{price} $</Text>
                    }
                </View>
                <View style={styles.detailContiner}>
                    <MatIcons name="date-range" style={styles.decoIcon} size={(window.width) * 0.06} />
                    {date === undefined ?
                        <Text style={styles.detailText}>Date Unavalaible</Text> :
                        <Text style={styles.detailText}>{date}</Text>
                    }
                </View>
            </View>
        </View>
    )
}

export default Artist
