import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class  extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style = {styles.textContainer}>
					<Text>Login Screen!</Text>
					<TouchableOpacity
						onPress = { () => {navigation.navigate('HomeApp')}}
						style = {styles.detailButton}
					>
						<Text>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress = { () => {navigation.navigate('Register')}}
						style = {styles.detailButton}
					>
						<Text>Register</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
