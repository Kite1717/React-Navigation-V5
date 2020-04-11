import React, { Component } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class  extends Component {
  render() {
    return (
			<SafeAreaView style = {styles.drawerContentContainer}>
				<View style = {styles.profileContainer}>

					<Image
						source = {require('./src/assets/icons/profile.png')}
						style = {styles.profileIcon}
						resizeMode = 'contain'
					/>
				</View>
				<ScrollView style = {styles.scrollContainer}>
					<TouchableOpacity
						style = {styles.detailButton}
						onPress ={() => navigation.navigate('MenuTab')}

					>
						<Text>Menu Tab</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style = {styles.detailButton}
						onPress ={() => navigation.navigate('Notifications')}

					>
						<Text>Notification</Text>
					</TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
    );
  }
}
