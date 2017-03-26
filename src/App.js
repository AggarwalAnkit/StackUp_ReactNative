import React from 'react';
import { View } from 'react-native';
import Posts from './components/Posts';

const App = () => {
  return (
    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10, paddingBottom: 20, flex: 1 }} >
      <Posts />
    </View>
  );
};

export default App;
