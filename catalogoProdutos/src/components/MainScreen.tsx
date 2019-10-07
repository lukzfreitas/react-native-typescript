import React, { Component } from 'react';
import { View, StatusBar, Text, Button } from 'react-native'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class MainScreen extends Component<Props> {

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
                <StatusBar backgroundColor='skyblue' />
                <Button title='Ir para Lista de itens' onPress={() => { navigation.navigate('ListItens') }} />
            </View>

        )
    }
}

