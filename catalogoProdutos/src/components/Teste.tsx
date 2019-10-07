import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Props } from './Item';
import { useNavigation } from '../commons/UseNavigation';



export class Teste extends Component {

    public navigation = useNavigation();
    
    public static navigationOptions = {
        title: 'Lista Itens',
    }

    render() {
        return <Text>teste</Text>
    }
}