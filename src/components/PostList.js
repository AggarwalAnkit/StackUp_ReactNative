import React, { Component } from 'react';
import { ListView } from 'react-native';
import axios from 'axios';
import { Spinner } from './common';
import Post from './Post';

class PostList extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isLoading: true,
      dataSource: this.ds.cloneWithRows([])
    };
  }

  componentWillMount() {
    axios.get('https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&tagged=react&site=stackoverflow')
    .then(response => {
      this.setState({ dataSource: this.ds.cloneWithRows(response.data.items), isLoading: false });
    });
  }

  renderPosts() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(post) => <Post post={post} />}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner size='small' />;
    }

    return this.renderPosts();
  }
}

export default PostList;
