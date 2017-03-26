import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import axios from 'axios';
import Spinner from './common/Spinner';

class Posts extends Component {
  state = { posts: [], isLoading: true };

  componentWillMount() {
    //this.setState({ isLoading: true });

    axios.get('https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&tagged=react&site=stackoverflow')
    .then(response => this.setState({ isLoading: false, posts: response.data.items }));
  }

  renderPosts() {
    return (
      <View>
        <Text>Stack Overflow Posts</Text>
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner size='small' />;
    }

    return (
      <View>
        {this.renderPosts()}
      </View>
    );
  }

}

export default Posts;
