import React from 'react';
import { ListView } from 'react-native';
import Post from './Post';

const PostList = ({ posts }) => {
  const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return (
    <ListView
      enableEmptySections
      dataSource={dataSource.cloneWithRows(posts)}
      renderRow={(post) => <Post post={post} />}
    />
  );
};

export default PostList;
