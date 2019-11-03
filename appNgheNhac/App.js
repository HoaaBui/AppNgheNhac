import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screen/HomeScreen';
import MixerScreen from './screen/MixerScreen';
import PlayScreen from './screen/PlayScreen';
import ProfileScreen from './screen/ProfileScreen';
import TimerScreen from './screen/TimerScreen';
import UpdateScreen from './screen/UpdateScreen';


// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text> 
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

const TabNavigator = createBottomTabNavigator(
{
  PlayScreen:{
    screen: PlayScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name='play' size={20} color={tintColor}/>
    },
  },
  TimerScreen:{
    screen: TimerScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialIcons name='timer' size={20} color={tintColor} />
    },
  },
  MixerScreen:{
    screen: MixerScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Entypo name='sound-mix' size={20} color={tintColor} />
    },
  },
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <AntDesign name='profile' size={20} color={tintColor} />
    },
  },
  UpgradeScreen:{
    screen: UpdateScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='professional-hexagon' size={20} color={tintColor} />
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: '#add8e6',
    inactiveTintColor: '#808080',
  },
}
);

export default createAppContainer(TabNavigator);
