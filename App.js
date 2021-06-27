import * as React from 'react';
import { StyleSheet,Image, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from './screens/homeScreen';
import exploreScreen from './screens/exploreScreen';
import MessageScreen from './screens/MessageScreen';
import ChatScreen from './screens/ChatScreen';
import consultantScreen from './screens/consultantScreen';
import settingsScreen from './screens/settingsScreen';
import { Feather } from '@expo/vector-icons'; 

const stack = createBottomTabNavigator();
export default class App extends React.Component{
  render(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName,color,size;
          if(route.name==="Home"){
            
            color = focused?"#1e90ff":"#87cefa";
            
            return <
            Image
            source={require("./assets/home.jpg")}
            style={{ height: 20, width: 20, }}
           / >
          }
          else if(route.name==="explore"){
            iconName="md-chatboxes";
            color = focused?"#1e90ff":"#87cefa";
            size=35;
            return <
            Image
            source={require("./assets/explorea.jpg")}
            style={{ height: 20, width: 20, }}
           / >
          }
          else if(route.name==="Message"){
            iconName="ios-add-circle";
            color = "#1e90ff";
            size=55;
            return <
            Image
            source={require("./assets/detail.jpg")}
            style={{ height: 20, width: 20, }}
           / >
          }
          else if(route.name==="consultant"){
            iconName="md-notifications";
            color = focused?"#1e90ff":"#87cefa";
            size=35;
            return <
            Image
            source={require("./assets/consultant.jpg")}
            style={{ height: 20, width: 20, }}
           / >
          }
          else if(route.name==="settings"){
            iconName="md-person";
            color = focused?"#1e90ff":"#87cefa";
            size=35;
            return <
            Image
            source={require("./assets/settings.jpg")}
            style={{ height: 20, width: 20, }}
           / >
          }
                  }
      })}
      tabBarOptions={{
        activeTintColor: "#1e90ff",
        inactiveTintColor: "00ffff",
        showLabel: false
  
      }}
      
      
      >
        <stack.Screen 
        name="Home" 
        component={homeScreen}
        options={{title: 'Home'}}
        />
        <stack.Screen 
        name="explore" 
        component={exploreScreen}
        options={{title: 'explore'}}
        />
        <stack.Screen 
        name="Message" 
        component={MessageScreen}
        
        
        />
        <stack.Screen 
        name="consultant" 
        component={consultantScreen}
        
        
        />
        <stack.Screen 
        name="settings" 
        component={settingsScreen}
        
        
        />
      </stack.Navigator>
    </NavigationContainer>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
