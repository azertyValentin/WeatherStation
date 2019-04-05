import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Components/Home'

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Weather Station'
        },
    },
})

export default createAppContainer(HomeNavigator)