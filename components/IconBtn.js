import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconBtn = ({ onPress, icon, color }) => {
  return (
    <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
