import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingScreen from '../screens/SettingScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
    <Tab.Navigator
       tabBarOptions={{ 
           showLabel: false,
           style: {
               position: 'absolute',
               bottom: 25,
               left: 20,
               right: 20,
               elevation: 0,
               backgroundColor: '#ffffff',
               borderRadius: 15,
               height: 90,
               ...styles.shadow
           }
        }}
       >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({focused}) => (
                <View
                   style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
                   >
                    <Text
                      style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                        HOME
                    </Text>
                </View>
            ),
        }} />
        <Tab.Screen name="Find" component={FindScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;