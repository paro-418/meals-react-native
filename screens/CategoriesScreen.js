import React from 'react';
import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = (id) => {
    navigation.navigate('MealsOverview', {
      categoryId: id,
    });
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(itemData) => (
        <CategoryTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler.bind(this, itemData.item.id)}
        />
      )}
    />
  );
};

export default CategoriesScreen;
