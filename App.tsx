import { View, SafeAreaView } from 'react-native';
import ViewComponent from './components/ViewComponent';
import TextComponent from './components/TextComponent';

function App() {
  return (
    <SafeAreaView>
      <View>
        <ViewComponent />
        <TextComponent/>
      </View>
    </SafeAreaView>
  );
}

export default App;
