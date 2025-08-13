import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ImageComponent() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.image}
      />
      <Image
        source={require("../assets/image.png")}
        style={styles.image}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
    gap:5
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
