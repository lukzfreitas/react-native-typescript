import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { If } from '../commons/If';

import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { string } from 'prop-types';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    item: any;
}

export class ItemEdit extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            item: props.navigation.getParam('item')
        }
    }

    public static navigationOptions = {
        title: 'Editar Item',
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'skyblue'
        },
    }

    render() {
        return (
            <View>
                {/* {
                    Object.keys(this.state.item).map((value => {
                        console.log(this.state.item[value]);
                        <TextInput autoFocus underlineColorAndroid='blue'
                            value={this.state.item[value].toString()}
                            onChangeText={(text) => {
                                this.setState(state => {
                                    return {
                                        ...state,
                                        item: {
                                            ...state.item,
                                            value: text
                                        }
                                    }
                                })
                            }}
                        />
                    }))
                } */}




                <TextInput autoFocus underlineColorAndroid='blue'
                    value={this.state.item.titulo}
                    onChangeText={(text) => {
                        this.setState(state => {
                            return {
                                ...state,
                                item: {
                                    ...state.item,
                                    titulo: text
                                }
                            }
                        })
                    }}
                />

                <TextInput autoFocus underlineColorAndroid='blue'
                    value={this.state.item.data_publicacao}
                    onChangeText={(text) => {
                        this.setState(state => {
                            return {
                                ...state,
                                item: {
                                    ...state.item,
                                    data_publicacao: text
                                }
                            }
                        })
                    }}
                />

                <TextInput autoFocus underlineColorAndroid='blue'
                    value={this.state.item.local_anuncio}
                    onChangeText={(text) => {
                        this.setState(state => {
                            return {
                                ...state,
                                item: {
                                    ...state.item,
                                    local_anuncio: text
                                }
                            }
                        })
                    }}
                />

                <TextInput autoFocus underlineColorAndroid='blue'
                    value={this.state.item.valor.toString()}
                    onChangeText={(text) => {
                        this.setState(state => {
                            return {
                                ...state,
                                item: {
                                    ...state.item,
                                    valor: text
                                }
                            }
                        })
                    }}
                />

                <TextInput autoFocus underlineColorAndroid='blue'
                    value={this.state.item.foto}
                    onChangeText={(text) => {
                        this.setState(state => {
                            return {
                                ...state,
                                item: {
                                    ...state.item,
                                    foto: text
                                }
                            }
                        })
                    }}
                />
            </View>
        )
    }
}