import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TextComponent = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.basicText}>
        Hey this is my first react native app
      </Text>
      <Text style={styles.basicText}>
        Text component also can be <Text style={styles.nested}>Nested</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding:5
  },

  basicText: {
    fontSize: 20,
  },
  nested: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default TextComponent;
