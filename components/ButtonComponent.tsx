import { View, Button, StyleSheet, Text } from 'react-native';
import React from 'react';

const ButtonComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Button Component</Text>
      <Button
        title={`Click Me ( Count :${count})`}
        onPress={() => setCount(c => c + 1)}
        color={'green'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
  },
  container: {
    padding: 10,
  },
});

export default ButtonComponent;
