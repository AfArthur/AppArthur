import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import foto from './assets/arthur.jpg';

const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.imagemRedonda}>
                <Image source={foto} style={styles.imagem}></Image>
            </View>
            <Text style={styles.titulo}>Arthur Ferraz Ávila</Text>
            <Text style={styles.subtitulo}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
            <Text style={styles.texto}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
    imagemRedonda: {
        width: 200, // Ajustar conforme necessário
        height: 200, // Ajustar conforme necessário
        overflow: 'hidden',
        borderRadius: 50, // 50% da largura ou altura
        marginBottom:100
    },
    imagem: {
        width: '100%',
        height: '100%',
    },
    texto: {
        marginBottom:100,
    }
});

export default Home;