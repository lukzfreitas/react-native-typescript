import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Teste }  from '../components/Teste';

const TesteModal = createStackNavigator({
    'TesteModal': {
        screen: Teste
    }
})

const RootStack = createStackNavigator(
    {
        'TesteRoot': {
            screen: Teste
        }
    }
)

const AppContainer = createAppContainer(RootStack);

export default AppContainer;