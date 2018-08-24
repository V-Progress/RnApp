import {AppRegistry} from 'react-native';
import App from './App';
import {StackNavigator} from 'react-navigation'
import LoginLeaf from "./LoginLeaf";
import WaitLeaf from "./WaitLeaf";

const SimpleApp = StackNavigator({
    Home: {screen: LoginLeaf},
    Wait: {screen: WaitLeaf}
});


AppRegistry.registerComponent('RnApp', () => SimpleApp);
