import React, { useContext, useLayoutEffect } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import IconBtn from '../components/IconBtn';
import { FavoritesContext } from '../store/context/favorite-context';

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const favoriteMealsCtx = useContext(FavoritesContext);
  console.log(mealId);
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  console.log('favoriteMealsCtx Ids', favoriteMealsCtx.ids);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  console.log('mealIsFavorite', mealIsFavorite);

  const changeMealFavorite = () => {
    // console.log('mds', favoriteMealsCtx.ids);
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            onPress={changeMealFavorite}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
          />
        );
      },
    });
  }, []);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
      <Text style={styles.title}>{selectedMeals.title} </Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeals.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeals.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeals.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          {selectedMeals.ingredients.map((item) => (
            <Text style={styles.list} key={item}>
              {item}
            </Text>
          ))}

          <Text style={styles.subTitle}>Steps</Text>
          {selectedMeals.steps.map((item) => (
            <Text style={styles.list} key={item}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 20 },
  details: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  detailItem: {
    marginHorizontal: 4,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  subTitle: {
    fontWeight: 'bold',
    marginVertical: 6,
    paddingVertical: 4,
    fontSize: 20,
    textAlign: 'center',
    color: '#e2b497',
    borderColor: '#e2b497',
    borderBottomWidth: 2,
    width: '80%',
    marginHorizontal: 30,
  },
  listOuterContainer: { alignItems: 'center' },
  listContainer: {
    width: '90%',
  },
  list: {
    color: 'brown',
    backgroundColor: '#e2b497',
    marginVertical: 8,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    borderRadius: 30,
  },
});
