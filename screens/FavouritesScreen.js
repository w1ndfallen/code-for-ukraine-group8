import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground, SafeAreaView} from 'react-native';

export default function HomeScreen() {
    const Back = () => {
        Alert.alert('You switched to previous page')}

    return(
       
         <ImageBackground source={require('../assets/background.jpg')}
             style={styles.container}
             resizeMode="cover">
            <SafeAreaView style={styles.container}>
                
              <View style={styles.topcontainer}>
                 <TouchableOpacity style={styles.backButton} onPress={Back}>
                  <Image source={require('../assets/back.png')}
                   style={styles.iconImage}/>
                 </TouchableOpacity>
                <View style={styles.yourFavoritesContainer}>
                    <Text style={styles.yourfavouritestext} > Your Favourites</Text>
                </View>
            </View>
             </SafeAreaView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10%',
    },
    iconImage: {
        height: 50,
        width: 50,
    },
  yourfavouritestext: {
    color: 'white',
    fontSize: 25,
        
    },
    yourFavoritesContainer: {
        backgroundColor: '#664C25',
        height: 70,
        width: 280,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topcontainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 30,
    }

})