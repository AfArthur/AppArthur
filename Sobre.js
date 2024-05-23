import React, { cloneElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';




const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Objetivo</Text>
            <Text style={styles.texto}>Sou um estudante de Análise e Desenvolvimento de Sistemas, apaixonado por design e com foco em me aperfeiçoar cada vez mais na área. Minha jornada acadêmica me proporcionou uma base sólida em desenvolvimento de interfaces e uma admiração pelo trabalho em equipe.</Text>
            <Text style={styles.titulo}>Formações</Text>
            <Text style={styles.texto}>
                <Text>ETE PORTO DIGITAL I 2020 - 2023</Text>
                <Text>                                                                                                                            </Text>
                <Text>FACULDADE SENAC I 2023 - 2025</Text></Text>
            <Text style={styles.titulo}>Habilidades</Text>
            <Text style={styles.texto}>HTML, CSS, SQL, FIGMA, CANVA</Text>
            <Text style={styles.titulo}>Idiomas</Text>
            <Text style={styles.texto}>Inglês (Intermediario)</Text>


            
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
    texto: {
        fontSize: 15,
        margin: 25,
    },
    hr: {
        width: '100%', // Ajuste conforme necessário
        height: 2, // Altura da linha
        backgroundColor: '#000', // Cor da linha
        marginVertical: 20, // Espaço acima e abaixo da linha
    },
});

export default Sobre;