import React, { Component } from 'react';
import { ScrollView, View, Button, TextInput } from 'react-native';
import { Item } from './Item';
import axios from 'axios';
import { NavigationScreenProp, NavigationParams, NavigationState } from 'react-navigation';
import {Teste} from './Teste'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
 }

interface State {
    listaItens: [];
    itemText: '';
}

export class ListItens extends Component<Props, State> {

    public static navigationOptions = {
        title: 'Lista Itens',
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
        const { navigation } = this.props;
        return (
            <ScrollView>
                {/* <TextInput
                    onChangeText={(itemText: string) => { this.setState({ itemText: itemText }) }}
                    onSubmitEditing = {()=>{this.searchItem(this.state.itemText)}}
                /> */}
                <Button title='Pesquisar' onPress={() => {this.props.navigation.navigate('Teste');}} />
                <View> 
                    {                        
                        this.state.listaItens.map((item, index) =>
                        (<Item key={index} item={item} />))
                    }
                </View>
            </ScrollView>

        )
    }
}