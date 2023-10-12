import React from 'react';
import { Alert, Button, StyleSheet } from 'react-native';
import { Text, View } from './Themed';

  export default function PrivateScreen({ path }: { path: string }) {
    const handleButtonPress = () => {
      Alert.alert('Por favor, elija su pelicula');
    };
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Peliculas Disponibles
        </Text>

      <View style={styles.buttonContainer}>
        <Button title="Cartelera" onPress={handleButtonPress} color="rgb(80, 120, 29)" />
      </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Disfrute nuestra selección de peliculas.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    margin: 30,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
});
