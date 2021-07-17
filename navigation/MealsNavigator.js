import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import {Image} from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

const defaultStackNavOptions ={
        headerStyle: {
            backgroundColor: Colors.accentColor
          },
          headerTintColor: 'white',
          headerBackTitle: 'Back',
}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen:  CategoriesMealsScreen
    },
    MealDetails:{
        screen:  MealDetailsScreen
    }, 
}, 
{
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
Favorites: FavoritesScreen,
MealDetails: MealDetailsScreen
}, 
{
    defaultNavigationOptions: defaultStackNavOptions
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
    }, 
    {
        defaultNavigationOptions: defaultStackNavOptions
});

const MealsFavTabNavigator = createBottomTabNavigator({
Meals: {screen: MealsNavigator, navigationOptions:{
    tabBarIcon: (tabInfo) => {
        return <Image source={{uri: 'https://image.flaticon.com/icons/png/512/685/685352.png'}} style={{height: 20, width: 20, tintColor: tabInfo.tintColor }} />
    },
    tabBarLabel: 'Recipes'
}},
Favorites: {screen: FavNavigator, navigationOptions:{
    tabBarIcon: (tabInfo) => {
        return <Image source={{uri: 'https://image.flaticon.com/icons/png/512/985/985760.png'}} style={{height: 20, width: 20, tintColor: tabInfo.tintColor }} />
    },
    tabBarLabel: 'Favorites'
}},
Filter: {screen: FiltersNavigator, navigationOptions:{
    tabBarIcon: (tabInfo) => {
        return <Image source={{uri: 'https://image.flaticon.com/icons/png/512/3126/3126528.png'}} style={{height: 20, width: 20, tintColor: tabInfo.tintColor }} />
    },
    tabBarLabel: 'Filters'
}},
}, 
{
tabBarOptions:{
    style:{
        backgroundColor: Colors.accentColor,
    },
    activeTintColor: 'white'
},

});

export default createAppContainer (MealsFavTabNavigator);