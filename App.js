import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { enableScreens } from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals'

enableScreens();

const rootReducer = combineReducers ({
meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return( 
    <Provider store={store}>
    <MealsNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});