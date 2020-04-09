import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';


import {CustomHeader} from '../index';

export default class  extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Register'} navigation={navigation}/>
				<View style = {styles.textContainer}>
					<Text>Register Screen !</Text>
				</View>
			</SafeAreaView>
    );
  }
}
