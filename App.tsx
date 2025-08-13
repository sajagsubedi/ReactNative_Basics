import { View, SafeAreaView, StyleSheet } from 'react-native';
import ViewComponent from './components/ViewComponent';
import TextComponent from './components/TextComponent';
import ImageComponent from './components/ImageComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <ViewComponent />
        <TextComponent />
        <ImageComponent />
        <ButtonComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 9,
  },
});

export default App;
