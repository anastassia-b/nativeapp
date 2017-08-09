import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Anastassia',
  };
  render() {
    return (
      <View>
        <Text>Chat with Anastassia</Text>
      </View>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Anastassia"
        />
      </View>
    );
  }
}

const ChatApp2 = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ChatApp2', () => ChatApp2);
