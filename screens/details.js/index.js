import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Details = ({ route }) => {
  const { itemId } = route.params;

  console.log(itemId);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{itemId}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
