import * as React from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//create custom header
function CustomHeader({title}) { // I sent the title as a props
  return(
    <View style = {styles.customHeaderContainer}>
      <View style = {[styles.cellContainer , {flex : 1}]}>
        <Image
         style = {styles.icon}
         source = {require('./src/assets/icons/menu.png')}
         resizeMode = 'contain'
        />
      </View>

      <View style = {[styles.cellContainer , {flex : 1.5}]}>
        <Text style ={styles.text}>{title}</Text>
      </View>
      <View style = {[styles.cellContainer , {flex : 1}]}></View>
    </View>
  )

}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={'Home'}/>
      <View style = {styles.textContainer}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={'Settings'}/>
      <View style = {styles.textContainer}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

//Minimal example of tab-based navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />


      </Tab.Navigator>
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

  }





});
