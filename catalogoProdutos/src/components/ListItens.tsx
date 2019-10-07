/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { Item } from './Item';
import axios from 'axios';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { Style } from '../styles/styles';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    listaItens: [];
    itemText: '';
}

export class ListItens extends Component<Props, State> {

    public static navigationOptions = {
        title: 'Lista de Itens',
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'skyblue'
        },        
    }

    constructor(props: Props) {
        super(props);
        this.state = { listaItens: [], itemText: '' }
    }

    componentDidMount() {
        this.getItens();
    }

    getItens = async () => { 
        return axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => {
                this.setState({ listaItens: response.data });
            }).catch(() => { console.log('Error') });
    }

    searchItem(itemText: string): void {
        this.getItens().then(() => {
            this.setState((state: any) => {
                const listaItens = state.listaItens.filter((item: any) => item.titulo == itemText);
                state.listaItens = listaItens;
                return state;
            })
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <ScrollView>
                    <TextInput
                        onChangeText={(itemText: string) => { this.setState({ itemText: itemText }) }}
                        onSubmitEditing={() => { this.searchItem(this.state.itemText) }}
                    />
                    <Button title='Pesquisar' onPress={() => { this.searchItem(this.state.itemText) }} />
                    <View>
                        {
                            this.state.listaItens.map((item: any, index) =>
                                (
                                    <View style={Style.item} key={index}>
                                        <Item item={item} />                                        
                                        <TouchableOpacity onPress={() => navigation.navigate('ItemEdit', {item: item}) }>
                                            <Image style={{ height: 100, width: 100 }} source={{ uri: item.foto }} />       
                                        </TouchableOpacity>                     
                                    </View>
                                )
                            )
                        }
                    </View>

                </ScrollView>
            </View>
        )
    }
}