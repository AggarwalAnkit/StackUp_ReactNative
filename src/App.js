import React from 'react';
import { View } from 'react-native';
import PostList from './components/PostList';

const App = () => (
  <View style={{ marginTop: 20, paddingBottom: 20, flex: 1 }} >
    <PostList />
  </View>
);

export default App;
