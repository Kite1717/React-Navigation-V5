import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {CustomHeader} from '../index';
import styles from '../styles/style';

export  class NotificationsScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Notification'} navigation={this.props.navigation}/>
				<View style = {styles.textContainer}>
					<Text>Notification Screen !</Text>
				</View>
			</SafeAreaView>
    );
  }
}
