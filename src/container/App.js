import React, { Component } from 'react';
import { View } from 'react-native';
import PostList from './PostList';
import { Input, Button, Card, CardSection, Spinner } from '../components/common';

class App extends Component {
  state = { tag: '', searchClicked: false };

  onButtonPressed() {
    this.setState({ searchClicked: true });
  }

  renderPosts() {
    if (this.state.searchClicked) {
      return <PostList tag={this.state.tag ? this.state.tag : 'react-native'} />;
    }

    return <Spinner size="small" />;
  }

  render() {
    return (
      <View style={{ marginTop: 20, paddingBottom: 20, flex: 1 }} >
        <Card>
          <CardSection>
            <Input
              placeholder="react-native"
              label="Tag"
              value={this.state.tag}
              onChangeText={tag => this.setState({ tag, searchClicked: false })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPressed.bind(this)}>
              Search
            </Button>
          </CardSection>
        </Card>

        {this.renderPosts()}
      </View>
    );
  }
}

export default App;
