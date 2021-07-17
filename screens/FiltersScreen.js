import React from 'react';
import {StyleSheet, View, Text, Switch, TouchableOpacity} from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterText}>{props.label}</Text>
      <Switch 
      value={props.state}
      onValueChange={props.onChange}
      trackColor={{true: '#F5F5F5', false: '#DCDCDC'}} 
      thumbColor={Colors.accentColor}/>
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState (false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };

  dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

return (
<View style={styles.screen}>
  <Text style={styles.title}>Available Filters</Text>
  <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
</View>
);
};

FiltersScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Filters',
  headerRight: () => <TouchableOpacity onPress={navData.navigation.getParam('save')}><Text style={styles.saveText}>SAVE</Text></TouchableOpacity>
  };
};


const styles = StyleSheet.create({
screen:{
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'black'
},
title: {
  fontSize: 22,
  margin: 20,
  textAlign: 'center',
  fontWeight: '500',
  color: 'white'
},
filterContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  marginVertical: 15
},
filterText:{
  color: 'white',
  fontWeight: '400',
  fontSize: 16
},
saveText:{
  color: 'white',
  marginHorizontal: 10
}
});

export default FiltersScreen;
