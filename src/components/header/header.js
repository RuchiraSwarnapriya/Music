import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const window = Dimensions.get('window');

const Header = ({navigation, title}) => { 
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcon name="chevron-back" size={(window.width) * 0.06} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header
