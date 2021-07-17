import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return(
      <View style={styles.screen}>
      <CategoryGridTile title={itemData.item.title} 
      color={itemData.item.color}
      onSelect={()=> {
        props.navigation.navigate({ routeName: 'CategoryMeals', params: {
          categoryId: itemData.item.id
        } 
      })
      }}/>
          </View>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />

  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default CategoriesScreen;
