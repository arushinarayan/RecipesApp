import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
return (
  <View style={styles.mealItem}>
  <TouchableOpacity onPress={props.onSelectMeal}>
<View>
  <View style={{...styles.mealRow, ...styles.mealHeader}}>
    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
  <View style={styles.titleContainer}>
  <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
  </View>
  </ImageBackground>
  </View>
  <View style={{...styles.mealRow, ...styles.mealDetail}}>
  <Text style={{color: 'white'}}>{props.duration}m</Text>
  <Text style={{color: 'white'}}>{props.complexity.toUpperCase()}</Text>
  <Text style={{color: 'white'}}>{props.affordability.toUpperCase()}</Text>
  </View>
</View>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
mealRow:{
  flexDirection: 'row',
},
mealItem:{
height: 200,
width: '100%',
backgroundColor: 'black',
borderRadius: 10,
overflow: 'hidden',
marginVertical: 10
},
mealHeader:{
height: '85%',
},
mealDetail:{
paddingHorizontal: 10,
justifyContent: 'space-between',
alignItems: 'center',
height: '15%',
backgroundColor: '#292929'
},
bgImage:{
  width: '100%',
  height: '100%',
  justifyContent: 'flex-end'
},
title:{
  fontSize: 20,
  color: 'white',
  textAlign: 'center'
},
titleContainer:{
  backgroundColor: 'rgba(41,41,41, 0.7)',
  paddingVertical: 5,
  paddingHorizontal: 12,
}
});

export default MealItem;