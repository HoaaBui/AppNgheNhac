import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text> 
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
{
  PlayScreen:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name='play' size={20} color={tintColor}/>
    },
  },
  TimerScreen:{
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialIcons name='timer' size={20} color={tintColor} />
    },
  },
  MixerScreen:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Entypo name='sound-mix' size={20} color={tintColor} />
    },
  },
  ProfileScreen:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <AntDesign name='profile' size={20} color={tintColor} />
    },
  },
  UpgradeScreen:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='professional-hexagon' size={20} color={tintColor} />
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: '#0000ff',
    inactiveTintColor: '#808080',
  },
}
);

export default createAppContainer(TabNavigator);
