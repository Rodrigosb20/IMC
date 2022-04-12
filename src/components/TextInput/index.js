import React, { Component } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    useColorScheme,
    View,
} from 'react-native';

class Dados extends Component {
    constructor(props) {
        super(props)
        this.state = { altura: 0, peso: 0, resultado: 0, resultadoText: "" }
        this.calcular = this.calcular.bind(this)
    }
    calcular() {
        let imc = this.state.peso / (this.state.altura * this.state.altura)
        let s = this.state
        s.resultado = imc
        if (s.resultado < 16) {
            s.resultadoText = 'Muito abaixo do peso'
        }
        else if (s.resultado < 17) {
            s.resultadoText = 'Moderadamente abaixo do peso'
        }
        else if (s.resultado < 18.5) {
            s.resultadoText = 'Abaixo do peso'
        }
        else if (s.resultado < 25) {
            s.resultadoText = 'Saudavel'
        }
        else if (s.resultado < 30) {
            s.resultadoText = 'Sobrepeso'
        }
        else if (s.resultado < 35) {
            s.resultadoText = 'Obesidade Grau 1°'
        }
        else if (s.resultado < 40) {
            s.resultadoText = 'Obesidade Grau 2°'
        }
        else {
            s.resultadoText = 'Obesidade Grau 3°'
        }
        this.setState(s)

    }
    render() {
        return (

            <View style={styles.container}>
                <Text>Altura:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(altura) => { this.setState({ altura }) }}
                    placeholder="Digita a altura:"
                    keyboardType="numeric"
                />
                <Text>Peso:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(peso) => { this.setState({ peso }) }}
                    placeholder="Digito o peso:"
                    keyboardType="numeric"
                />
                <Button
                    style={styles.botao}
                    title="calcule"
                    onPress={this.calcular}
                />
                <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
                <Text style={[styles.resultado, { fontSize: 20 }]}>{this.state.resultadoText}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        textAlign: 'center',
        justifyContent: 'center',

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        justifyContent: 'center'

    },
    botao: {
        color: 'blue'
    },
    resultado: {
        textAlign: 'center',
        color: "#6495ED",
        fontSize: 45,
        fontWeight: 'bold',
        padding: 6,
    },

})

export default Dados;