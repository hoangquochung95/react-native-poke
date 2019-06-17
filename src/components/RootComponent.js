import React , { Component } from 'react';
import configRedux from '../store/configRedux';
import { Provider } from 'react-redux';
import LoginComponent from './LoginComponent';
import ListComponent from './ListComponent';
import { createStackNavigator, createAppContainer } from "react-navigation";

const store = configRedux();

let RootStack = createStackNavigator({
  LoginComponent: LoginComponent,
  ListComponent: ListComponent
});

let Navigation = createAppContainer(RootStack);

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}
