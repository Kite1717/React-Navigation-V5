import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {CustomHeader} from '../index';

export default class SettingsScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Setting'} isHome={true} navigation={navigation}/>
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
}

const styles = StyleSheet.create({});
