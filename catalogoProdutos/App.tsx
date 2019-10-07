/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from './src/components/MainScreen';
import { ListItens } from './src/components/ListItens';
import { ItemEdit } from './src/components/ItemEdit';
import { Item } from './src/components/Item';

const App = createAppContainer(
    createStackNavigator({
        MainScreen: MainScreen,
        ListItens: ListItens,
        ItemEdit: ItemEdit,
        Item: Item
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'skyblue'
            },
        }
    })
)

export default App;

