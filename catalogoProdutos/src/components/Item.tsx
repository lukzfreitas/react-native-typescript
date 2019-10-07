import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { If } from '../commons/If';
import { Style } from '../styles/styles';

export interface Props {
    item: any;
}

export class Item extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={Style.item}>
                <If condition={this.props.item.valor < 200}>
                    <Text style={Style.titleItem}>{this.props.item.titulo}</Text>
                    <Text>Data: {this.props.item.data_publicacao}</Text>
                    <Text>Cidade: {this.props.item.local_anuncio}</Text>
                    <Text>Preço: {this.props.item.valor}</Text>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
                </If>
            </View >
        )
    }

}

