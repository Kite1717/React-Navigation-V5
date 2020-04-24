import React, { Component } from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {CustomHeader} from '../index';
import styles from '../styles/style';
 export class HomeScreenDetail extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Home Detail'} navigation={this.props.navigation} />
				<View style = {styles.textContainer}>
					<Text>Home detail :)</Text>
				</View>
			</SafeAreaView>
    );
  }
}

