import React from 'react';
import { Alert, Button, Image, ImageBackground, StyleSheet, ScrollView, View } from 'react-native';
import { Text } from './Themed';

export default function PrivateScreen({ path }: { path: string }) {
  const handleButtonPress = () => {
    Alert.alert('Por favor, elija su película');
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://img.freepik.com/vector-premium/patron-cine-fondo-transparente-simbolos-produccion-cine-peliculas-ilustracion-fondo-entretenimiento-camara-pelicula-produccion-cine-vectorial_80590-13282.jpg?w=740',
      }}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Películas Disponibles
          </Text>

          <View style={styles.imageContainer}>
            <Text style={styles.descriptionText}>Avatar</Text>
            <Image
              source={{
                uri:
                  'https://m.media-amazon.com/images/I/61UukTiUWKL._AC_UF1000,1000_QL80_.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}> La historia sigue a Jake Sully, un ex-marine parapléjico que se involucra en el programa Avatar para explorar Pandora con un avatar alienígena.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.descriptionText}>El señor de los anillos</Text>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE42vSrrIpfjJ-kTylV3OL1ps93unpIcuvg&usqp=CAU',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}> Frodo es encargado de destruir un poderoso anillo mágico para evitar que caiga en manos del malvado Sauron, quien planea usarlo para gobernar el mundo.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.descriptionText}>Trece vidas</Text>
            <Image
              source={{
                uri:
                  'https://hips.hearstapps.com/hmg-prod/images/poster-oficial-1659694154.jpg?crop=1.00xw:0.768xh;0,0.0974xh&resize=980:*',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}>Basada en la historia real, "Trece vidas" es el relato del rescate de un equipo de fútbol de la cueva de Tham Luang, en Tailandia, tras quedar atrapado por las lluvias torrenciales y peligrosas inundaciones. </Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.descriptionText}>Pulp Fiction</Text>
            <Image
              source={{
                uri:
                  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095733-51yHtvZGa5S._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}>La película presenta varias tramas interconectadas que involucran a personajes diversos, como gánsteres, boxeadores, y criminales de poca monta, todos entrelazados en una serie de eventos inesperados y situaciones violentas.</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Cartelera" onPress={handleButtonPress} color="rgb(280, 198, 29)" />
          </View>

          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            ¡Disfrute nuestra selección de películas!
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 50,
  },
  getStartedText: {
    margin: 30,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: 'darkgray',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderColor: 'rgb(280, 198, 29)',
    borderWidth: 3,
    width: 300,
  },
  image: {
    borderColor: 'rgb(280, 198, 29)',
    borderWidth: 2,
    width: 250,
    height: 300,
  },
  descriptionText: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});
