import React, { Component } from 'react';
import { ScrollView, View, Button, TextInput, StatusBar } from 'react-native';
import { Item } from './Item';
import axios from 'axios';

interface Props { }

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
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => {
                this.setState({ listaItens: response.data });
            }).catch(() => { console.log('Error') });
    }

    searchItem(itemText: string): void {
        this.setState((state: any) => {
            const listaItens = state.listaItens.filter((item: any) => item.titulo == itemText);
            state.listaItens = listaItens;
            return state;
        })
    }

    render() {
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
                            this.state.listaItens.map((item, index) =>
                                (<Item key={index} item={item} />))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}