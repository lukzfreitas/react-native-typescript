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
import { Item } from './src/components/Item';

const App = createAppContainer(
    createStackNavigator({
        Main: MainScreen,
        ListItens: ListItens        
    })
)

export default App;

