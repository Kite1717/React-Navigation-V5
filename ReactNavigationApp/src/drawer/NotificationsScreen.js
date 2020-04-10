import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {CustomHeader} from '../index';

export default class NotificationsScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Notification'} navigation={navigation}/>
				<View style = {styles.textContainer}>
					<Text>Notification Screen !</Text>
				</View>
			</SafeAreaView>
    );
  }
}
