import React, {useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
  props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect (() => {
    props.navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
    <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
  <View style={styles.details}>
  <Text style={{color: 'black'}}>{selectedMeal.duration}m</Text>
  <Text style={{color: 'black'}}>{selectedMeal.complexity.toUpperCase()}</Text>
  <Text style={{color: 'black'}}>{selectedMeal.affordability.toUpperCase()}</Text>
  </View>
  <Text style={styles.title}>Ingredients</Text>
  {selectedMeal.ingredients.map(ingredient => (
    <ListItem key={ingredient}>{ingredient}</ListItem>))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite= navigationData.navigation.getParam('toggleFav');
  const isFavorite= navigationData.navigation.getParam('isFav');
  //const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: () => <TouchableOpacity onPress={toggleFavorite}><Text style={styles.favText}>{isFavorite ? 'UNFAV' : 'FAV' }</Text></TouchableOpacity>
  };
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favText:{
    color: 'white',
    marginHorizontal: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '500'
  },
  listItem: {
    marginVertical: 3,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;