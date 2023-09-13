import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoritesIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    const newArray = favoritesIds.push(id);
    console.log('added', newArray);
    setFavoriteIds(newArray);
    // console.log('value1', value.ids);
  };

  const removeFavorite = (id) => {
    const newArray = favoritesIds.filter((mealId) => mealId !== id);
    console.log('removed', newArray);
    setFavoriteIds(newArray);
    // setFavoriteIds((prev) => prev.filter((mealId) => mealId !== id));
    // console.log('value2', value.ids);
  };

  const value = {
    ids: favoritesIds,
    addFavorite,
    removeFavorite,
  };
  console.log('value  ids', value.ids);
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
