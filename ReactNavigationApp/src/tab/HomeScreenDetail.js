import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {CustomHeader} from '../index';

export default class HomeScreenDetail extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Home Detail'} navigation={navigation} />
				<View style = {styles.textContainer}>
					<Text>Home detail :)</Text>
				</View>
			</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
