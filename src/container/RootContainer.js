import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { storeTag, getPosts } from '../redux/actions/ActionCreator';
import PostList from '../components/PostList';
import { Input, Button, Card, CardSection, Spinner } from '../components/common';

class RootContainer extends Component {

  renderPosts() {
    if (this.props.isLoading) {
      return <Spinner size="small" />;
    }

    if (this.props.posts.length > 0) {
      return <PostList posts={this.props.posts} />;
    }
  }

  render() {
    return (
      <View style={{ marginTop: 20, paddingBottom: 20, flex: 1 }} >
        <Card>
          <CardSection>
            <Input
              placeholder="react-native"
              label="Tag"
              value={this.props.tag}
              onChangeText={this.props.storeTag}
            />
          </CardSection>

          <CardSection>
            <Button onPress={() => this.props.getPosts(this.props.tag)}>
              Search
            </Button>
          </CardSection>
        </Card>

        {this.renderPosts()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  tag: state.tag,
  posts: state.posts,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  storeTag: (tag) => dispatch(storeTag(tag)),
  getPosts: (tag) => dispatch(getPosts(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

//handle empty view
