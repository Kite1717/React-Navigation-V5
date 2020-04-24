import React, { Component } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import styles from '../styles/style';


export  class LoginScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style = {styles.textContainer}>
					<Text>Login Screen!</Text>
					<TouchableOpacity
						onPress = { () => {this.props.navigation.navigate('HomeApp')}}
						style = {styles.detailButton}
					>
						<Text>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress = { () => {this.props.navigation.navigate('Register')}}
						style = {styles.detailButton}
					>
						<Text>Register</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
    );
  }
}

