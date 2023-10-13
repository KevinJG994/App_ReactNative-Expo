import React from 'react';
import { Alert, Button, StyleSheet, ImageBackground } from 'react-native';
import { Text, View } from './Themed';

export default function PublicScreen({ path }: { path: string }) {
  const handleButtonPress = () => {
    Alert.alert('¡Bienvenido a CineAsta, que tenga un maravilloso día!');
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://img.freepik.com/vector-premium/patron-cine-fondo-transparente-simbolos-produccion-cine-peliculas-ilustracion-fondo-entretenimiento-camara-pelicula-produccion-cine-vectorial_80590-13282.jpg?w=740',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Bienvenido a CineAsta
        </Text>

        <View style={styles.buttonContainer}>
          <Button title="Cartelera" onPress={handleButtonPress} color="rgb(280, 198, 29)" />
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Descubre nuestra selección de Películas.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  getStartedContainer: {
    backgroundColor: 'darkgray',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    margin: 30,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
});
