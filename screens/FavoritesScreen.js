import React from 'react';
import { useSelector } from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

import MealList from '../components/MealList';


const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>No Favorite Meals Found, Add Some Now!</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    textAlign: 'center'
  },
  text:{
    color: 'white',
    fontSize: 18,
    fontWeight: '400'
  }
});

export default FavoritesScreen;