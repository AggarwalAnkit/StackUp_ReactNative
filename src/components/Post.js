import React from 'react';
import { Text, Linking } from 'react-native';
import { Card, CardSection } from './common';

const Post = ({ post }) => {
  const { titleStyle } = styles;
  return (
    <Card onPress={() => Linking.openURL(post.link)}>
      <CardSection>
        <Text style={titleStyle}>{post.title.replace(new RegExp('&#39;', 'g'), '\'')}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  titleStyle: {
    fontSize: 15
  }
};

export default Post;
