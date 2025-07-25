import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';

export default function HomeScreen() {
    
      const MakeNewDish = () => {
        Alert.alert('You can fill in your ingredients');
      };

            const Settings = () => {
        Alert.alert('You switched to settings');
      };

    return (
        <ImageBackground source={require('../assets/background.jpg')}
            style={styles.container}
        >
             <View>
             <TouchableOpacity style={styles.settingsIcon} onPress={Settings}>
                   <Image
                    source={require('../assets/newsettings.png')}
                    style={styles.iconImage}
                    />
             </TouchableOpacity>
            </View>

            <View style={styles.container2}>
             <TouchableOpacity style={styles.dishbutton} onPress={MakeNewDish}>
               <Text style={styles.dishbuttonText}>Make new dish</Text>
             </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    container2: {
        alignItems: 'center',
        marginTop: '50%'
    },
    dishbutton: {
        width: 250,
        height: 250,
        borderRadius: 130,
        backgroundColor: '#664C25',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dishbuttonText: {
        fontSize: 30,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
     },
    settingsIcon:{
        alignItems: 'left',
        marginLeft: '75%',
         marginTop: '15%',

    },
    iconImage:{
        width: 50,
        height: 50,
        justifyContent: 'left',
        alignItems: 'left',
    }
   
})