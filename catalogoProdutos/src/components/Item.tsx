/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Style } from '../styles/styles';
import axios from 'axios';

interface Props {
    item: any;
}

interface State {
    item: any;
}

export class Item extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { item: this.props.item };
    }

    getItem(): any {
        return axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => {
                const result = response.data.filter((item: any) => {
                    return item.titulo == this.state.item.titulo;
                })
            }).catch(() => { console.log('Error') });
    }

    render() {
        return (
            <View>
                <Text style={Style.titleItem}>{this.state.item.titulo}</Text>
                <Text>Data: {this.state.item.data_publicacao}</Text>
                <Text>Cidade: {this.state.item.local_anuncio}</Text>
                <Text>Preço: {this.state.item.valor}</Text>
            </View >
        )
    }

}

