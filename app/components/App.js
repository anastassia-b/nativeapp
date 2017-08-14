import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ChatScreen from './Chat';
import HomeScreen from './Home';

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate(
          'Chat', { user: 'David'})} title="Chat with David"
        />
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate(
          'Chat', { user: 'Elliot'})} title="Chat with Elliot"
        />
      </View>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const ChatApp2 = StackNavigator({
  Home: { screen: MainScreenNavigator },
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
