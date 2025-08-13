import { View, SafeAreaView } from 'react-native';
import ViewComponent from './components/ViewComponent';
import TextComponent from './components/TextComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <SafeAreaView>
      <View>
        <ViewComponent />
        <TextComponent/>
        <ImageComponent/>
      </View>
    </SafeAreaView>
  );
}

export default App;
