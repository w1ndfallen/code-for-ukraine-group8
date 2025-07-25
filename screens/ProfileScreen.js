import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';

export default function ProfileScreen() {
  const [username, setUsername] = useState('');
  const images = [
    'https://i.pinimg.com/736x/03/b4/5a/03b45a315dac5b5bb6ba80b2ec47c06e.jpg',
    'https://i.pinimg.com/736x/b2/4f/a8/b24fa820c6ace9779a398ca4bcd12e26.jpg',
    'https://i.pinimg.com/1200x/e3/cc/85/e3cc850056de69d02ad9c5c57c68341f.jpg',
    'https://i.pinimg.com/736x/fe/17/b4/fe17b440e1dd9d7eab9011e9e2ed9ff2.jpg',
    'https://i.pinimg.com/736x/f1/20/93/f12093cdd73bfd790cbc136528f90594.jpg',
    'https://i.pinimg.com/736x/e6/ef/a9/e6efa9935e9788b596919cf40b8a18da.jpg',
    'https://i.pinimg.com/736x/63/02/23/6302237bffc3d6562df11feafd0086f6.jpg',
    'https://i.pinimg.com/736x/45/2d/2e/452d2e4ed518218c7d3e79210e7e1dce.jpg',
    'https://i.pinimg.com/736x/5d/db/4e/5ddb4eb59ef859e55d69e926f821e69f.jpg',
    'https://i.pinimg.com/736x/e0/be/6d/e0be6d6f99a3a4d9b7ecae596b32d57e.jpg',
    'https://i.pinimg.com/736x/c9/a5/5d/c9a55d65e694a7ce79784b4749c03a2b.jpg',
    'https://i.pinimg.com/736x/8d/11/84/8d1184ce8a5ce90961bca0f35ede8221.jpg',
    'https://i.pinimg.com/736x/db/11/45/db1145e610fb648698136620640e466c.jpg'
  ];

  const [Avatar, setAvatar] = useState(0);

  const handleNextImage = () => {
    setAvatar((prevAvatar) => (prevAvatar + 1) % images.length);
  };

  const handleYourHistory = () => {
    Alert.alert('You see your history');
  };

  const handleYourFavourites = () => {
    Alert.alert('You see your favourites');
  };

  return (
   <ImageBackground source={require('../assets/background.jpg')} 
    style={styles.container}
    resizeMode="contain">
        <View style={styles.topColoredArea}>
                    <Image
          source={{ uri: images[Avatar] }}
          style={styles.avatar}
        />
      <TextInput
        style={styles.usernameEntry}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />


    </View>
      <View style={styles.content}>
              <TouchableOpacity style={styles.buttons} onPress={handleNextImage}>
        <Text style={styles.buttonsText}>Change your avatar</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={handleYourHistory}>
          <Text style={styles.buttonsText}>Your history</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={handleYourFavourites}>
          <Text style={styles.buttonsText}>Your favourites</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topColoredArea: {
    alignItems: 'center',
    backgroundColor: '#EDD8A2',
    borderRadius: 30,
    minWidth: '100%',
    minHeight: '33%',
    borderWidth: 5,
    borderColor: '#cdb26cff',
    justifyContent: 'center',
    shadowColor: '#685014ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  content: {
    margin: 60,
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  usernameEntry: {
    height: '15%',
    minWidth: '63%',
    borderColor: '#cdb26cff',
    borderWidth: 3,
    paddingHorizontal: 10,
    marginBottom: '1%',
    marginTop: '2%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    height: 60,
    margin: '3%',
    padding: '3%',
    backgroundColor: '#664C25',
    borderColor: '#69572cff',
    borderWidth: 3,
    borderRadius: 30,
     shadowColor: '#090702ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  buttonsText:{
    color: 'white',
    fontSize: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 210,
    height: 210,
    borderRadius: 100,
    marginBottom: 17,
    marginTop: 10,
    borderWidth: 5,
    borderColor: '#cdb26cff',
  }

})
