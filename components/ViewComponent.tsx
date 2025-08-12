import { View, StyleSheet } from 'react-native';
import React from 'react';

const ViewComponent = () => {
  return (
    <View style={styles.flexBox}>
      <View style={[styles.container, styles.redBox]} />
      <View style={[styles.container, styles.greenBox]} />
      <View style={[styles.container, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5',
    justifyContent: 'space-around',
    padding:5
  },
  container: {
    width: 100,
    height: 100,
  },
  redBox: {
    backgroundColor: 'red',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
});

export default ViewComponent;
