/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Button } from 'react-native'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class MainScreen extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    public static navigationOptions = {
        title: 'Página Principal',
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'skyblue'
        },
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>                
                <Button title='Ir para Lista de itens' onPress={() => { navigation.navigate('ListItens') }} />                
            </View>

        )
    }
}

