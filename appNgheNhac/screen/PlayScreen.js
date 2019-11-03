import React from 'react';
import { Text, View } from 'react-native';

export default class PlayScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Play!</Text> 
        </View>
      );
    }
  }