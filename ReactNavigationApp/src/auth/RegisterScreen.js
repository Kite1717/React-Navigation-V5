import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import styles from '../styles/style';
import {CustomHeader} from '../index';

export  class  RegisterScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Register'} navigation={this.props.navigation}/>
				<View style = {styles.textContainer}>
					<Text>Register Screen !</Text>
				</View>
			</SafeAreaView>
    );
  }
}
