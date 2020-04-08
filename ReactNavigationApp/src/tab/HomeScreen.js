import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {CustomHeader} from '../index';

export default class HomeScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Home'} isHome={true} navigation={navigation}/>
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
}

const styles = StyleSheet.create({});
