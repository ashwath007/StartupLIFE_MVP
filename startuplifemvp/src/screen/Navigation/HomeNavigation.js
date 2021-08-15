import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Settings from '../support/Settings';
import Home from '../Home';
import Organization from '../Organization';
import Video from '../Video';
import Profile from '../Profile';

const HomeNavigation = () => {
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Organization" component={Organization} />
        <Tab.Screen name="Video" component={Video} />
        <Tab.Screen name="Profile" component={Profile} />



        {/* <Tab.Screen name="Settings" component={Settings} /> */}

      </Tab.Navigator>
    )
}

export default HomeNavigation;