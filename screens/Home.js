import React, { Component } from 'react';
//Desafio 01: Importar o componente de Imagem
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';

//Desafio 02: Adicione a imagem ao botão, atribuindo a sua fonte e seu estilo (faça isso para cada botão)
//Desafio 03: Atribua a navegação para as telas quando os botões forem pressionados
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <ImageBackground
          source={require('../assets/bg_image.png')}
          resizeMode='cover'
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>App Rastreador EEI</Text>
          </View>

          <TouchableOpacity style={styles.routeCard}
            
            >
            <Text style={styles.routeText}>Localização da EEI</Text>
            <Text style={styles.knowMore}>{"Saber mais -->"}</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}
            
            >
            <Text style={styles.routeText}>Meteoros</Text>
            <Text style={styles.knowMore}>{"Saber mais -->"}</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}
            
            >
            <Text style={styles.routeText}>Atualizações</Text>
            <Text style={styles.knowMore}>{"Saber mais -->"}</Text>
            
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.35,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  //Aula 89: Inserção do estilo adequado para a imagem de fundo
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  //Aula 89: Inserção do estilo adequado para as imagens dos botões
  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  }
});
