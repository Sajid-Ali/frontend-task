import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardImage from '../../assets/images/cardImage.png';
import Card from '../../components/Card/Card';

export const Users = () => {
  return (
    <View>
      <Card
        imageSource={CardImage}
        containerStyle={styles.cardContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  cardContainerStyle: {
    marginBottom: 15,
  },
});
