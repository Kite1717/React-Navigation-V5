import * as React from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Handle Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
//Handle Stack Navigator
import {createStackNavigator} from '@react-navigation/stack';

import {CustomHeader,CustomDrawerContent} from './src';
import {HomeScreen , HomeScreenDetail ,SettingsScreen,SettingsScreenDetail } from './src/tab';

import {NotificationsScreen} from './src/drawer';

import {RegisterScreen , LoginScreen} from './src/auth';






/**Navigations**/
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// separate stack should be produced for each page
const StackHome = createStackNavigator();
const StackSetting = createStackNavigator();
const StackApp = createStackNavigator();



/**Stacks**/

//create HomeStack
function HomeStack() {
  return(
    <StackHome.Navigator initialRouteName = 'Home'>
      <StackHome.Screen  name='Home' component = {HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen  name='HomeDetail' component = {HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

//create SettingStack
function SettingStack() {
  return(
    <StackSetting.Navigator initialRouteName = 'Setting'>
      <StackSetting.Screen  name='Setting' component = {SettingsScreen} options={navOptionHandler}/>
      <StackSetting.Screen  name='SettingDetail' component = {SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}

/**Tab Navigator**/

function TabNavigator() {

  return(
  <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./src/assets/icons/home-white.png')
                : require('./src/assets/icons/home-black.png')
            } else if (route.name === 'Settings') {
              iconName = focused
                ?  require('./src/assets/icons/settings-white.png')
                :  require('./src/assets/icons/settings-black.png')
            }

            // You can return any component that you like here!
            return <Image
              source={iconName}
              style={styles.tabIcon}
              resizeMode = 'contain'
            />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}
      >

        {/*now we will put the stacks we created
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} /> */}

        {/* we have two header these are default header from StackNavigation and my custom header */}
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />

  </Tab.Navigator>
  )
}

/**Drawer Navigator**/
function DrawerNavigator() {
  return(
    <Drawer.Navigator initialRouteName="MenuTab"
      // create custom slide menu
                      drawerContent = { props =>(CustomDrawerContent(props))}
    >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}
/**Navigation Options**/
// Must be added to all components in the stack
//to destroy the default header
const navOptionHandler = () => ({

  headerShown : false,  // we closed the default header
});


/**MAIN**/
//Minimal example of tab-based navigation
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName = 'Login'>
        <StackApp.Screen  name='HomeApp' component = {DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen  name='Login' component = {LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen  name='Register' component = {RegisterScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  customHeaderContainer : {
    flexDirection : 'row',
    height : 50,

    //activate the title you want to edit
    //borderWidth : 1,
    //borderColor : 'red',

  },
  textContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  cellContainer : {
    flex : 1,
    justifyContent: 'center',

    //activate the title you want to edit
    //borderWidth:  1,
    //borderColor: 'red',


  },
  text :{
    textAlign : 'center',
  },
  icon : {
    width : 20,
    height:  20,
    marginLeft : 5,

  },
  detailButton : {

    marginTop : 20,
  },
  backButtonContainer : {
    flexDirection: 'row',
    alignItems:  'center',

  },
  tabIcon :{
    width: 20,
    height : 20,
  },
  drawerContentContainer :{
    flex : 1,

  },
  scrollContainer : {
    marginLeft:  5,
  },
  profileContainer : {

    height :150,
    justifyContent :'center',
    alignItems : 'center',
  },
  profileIcon :{
    height : 120,
    width : 120,
    borderRadius : 60,
  }
});
