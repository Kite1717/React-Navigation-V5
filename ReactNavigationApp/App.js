import * as React from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Handle Stack Navigator
import {createStackNavigator} from '@react-navigation/stack';



//create custom header
function CustomHeader({title,isHome,navigation}) { // I sent the title as a props
  return(

    //****boolean default value false****

    <View style = {styles.customHeaderContainer}>
      <View style = {[styles.cellContainer , {flex : 1}]}>
      {
        // handle button back
        // header will appear on the main page
        // otherwise the back button will appear
        isHome ?
            <Image
              style = {styles.icon}
              source = {require('./src/assets/icons/menu.png')}
              resizeMode = 'contain'
            />
          :
          <TouchableOpacity
            style ={styles.backButtonContainer}
            onPress = {() => navigation.goBack()}
          >
            <Image
              style = {styles.icon}
              source = {require('./src/assets/icons/back.png')}
              resizeMode = 'contain'
            />
            <Text style ={{marginLeft: 5}}>Back</Text>
          </TouchableOpacity>
      }

      </View>
      <View style = {[styles.cellContainer , {flex : 1.5}]}>
        <Text style ={styles.text}>{title}</Text>
      </View>
      <View style = {[styles.cellContainer , {flex : 1}]}></View>
    </View>
  )

}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={'Home'} isHome={true}/>
      <View style = {styles.textContainer}>
        <Text>Home!</Text>
        {/* create screen detail*/}
        <TouchableOpacity
         style = {styles.detailButton}
          // handle go to detail (Do not forget how you registered in which name parameter) name = 'HomeDetail'
         onPress = { () => {navigation.navigate('HomeDetail')}}
        >
          <Text>Go Home detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({navigation}) { // navigation for goBack method
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={'Home Detail'} navigation={navigation} />
      <View style = {styles.textContainer}>
        <Text>Home detail :)</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={'Setting'} isHome={true}/>
      <View style = {styles.textContainer}>
        <Text>Settings!</Text>
        <TouchableOpacity
          onPress = { () => {navigation.navigate('SettingDetail')}}
          style = {styles.detailButton}
        >
          <Text>Go Setting detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


function SettingsScreenDetail({navigation}) { // navigation for goBack method
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={'Setting Detail'} navigation={navigation}/>
      <View style = {styles.textContainer}>
        <Text>Setting Detail :)</Text>
      </View>
    </SafeAreaView>
  );
}

//NAVS
const Tab = createBottomTabNavigator();
// separate stack should be produced for each page
const StackHome = createStackNavigator();
const StackSetting = createStackNavigator();
//navigation settings
// Must be added to all components in the stack
//to destroy the default header
const navOptionHandler = () => ({

  headerShown : false,  // we closed the default header
});


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

//Minimal example of tab-based navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        {/*now we will put the stacks we created
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> */}

        {/* we have two header these are default header from StackNavigation and my custom header */}
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />

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

  },
  detailButton : {

    marginTop : 20,
  },
  backButtonContainer : {
    flexDirection: 'row',
    alignItems:  'center',

  }





});
