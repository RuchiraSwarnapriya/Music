import React, { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';



const Home = ({ navigation }) => {

    const window = Dimensions.get('window');

    const [val, setVal] = useState('');
    const [searchValue, setSearch] = useState('a');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://itunes.apple.com/search?term=' + searchValue + '&limit=25')
            .then((response) => response.json())
            .then((json) => setData(json.results))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    });


    function updateSearch(search) {
        setVal(search)
        let str = search.toLowerCase();
        var modifiedSearch = str.split(' ').join('+');
        setSearch(modifiedSearch);
    };

    console.log(data.collectionName)

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Searchbar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={val}
                style={styles.searchBar}
            />
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={{ top: 200 }} /> : (
                <FlatList
                    style={styles.mainContainer}
                    data={data}
                    keyExtractor={({ trackId }, index) => trackId}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onPress(item)} activeOpacity={1}>
                            <View style={styles.listItem}>
                                <Image source={{ uri: item.artworkUrl60 }} style={styles.artistImage} />
                                <View style={styles.trackDeatils}>
                                    <View style={styles.trackContainer}>
                                        {item.trackName === undefined ?
                                            <Text style={styles.trackName}>No Title</Text> :
                                            <Text style={styles.trackName}>{item.trackName}</Text>
                                        }
                                    </View>
                                    <View style={styles.artistNameContainer}>
                                        <EntypoIcon name="modern-mic" style={styles.decoIcon} size={(window.width) * 0.03} />
                                        {item.artistName === undefined ?
                                            <Text style={styles.artistName}>No Artist</Text> :
                                            <Text style={styles.artistName}>{item.artistName}</Text>
                                        }
                                    </View>
                                    <View style={styles.collectionContainer}>
                                        <MatIcons name="library-music" style={styles.decoIcon} size={(window.width) * 0.03} />
                                        {item.collectionName === undefined ?
                                            <Text style={styles.collectionName}>No Collection</Text> :
                                            <Text style={styles.collectionName}>{item.collectionName}</Text>
                                        }
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    )

    function onPress(item) {
        navigation.navigate('Artist', {
            image: item.artworkUrl100,
            trackName: item.trackName,
            collectionName: item.collectionName,
            artistName: item.artistName,
            price: item.trackPrice,
            releaseDate: item.releaseDate,
        });
    }
}

export default Home
