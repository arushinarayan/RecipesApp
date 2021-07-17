import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
    <View style={{...styles.container, ...{backgroundColor: props.color}}}>
      <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  container:{
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title:{
    fontSize: 22,
    textAlign: 'right',
    fontWeight: '500'
  }
});

export default CategoryGridTile;