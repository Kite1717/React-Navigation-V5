import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {CustomHeader} from '../index';

export default class SettingsScreenDetail extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Setting Detail'} navigation={navigation}/>
				<View style = {styles.textContainer}>
					<Text>Setting Detail :)</Text>
				</View>
			</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
