import React, { Component } from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {IMAGE} from "./constants/Image";
import styles from './styles/style';
export  class CustomDrawerContent extends Component {
  render() {
    return (
			<SafeAreaView style = {styles.drawerContentContainer}>
				<View style = {styles.profileContainer}>

					<Image
						source = {IMAGE.ICON_PROFILE}
						style = {styles.profileIcon}
						resizeMode = 'contain'
					/>
				</View>
				<ScrollView style = {styles.scrollContainer}>
					<TouchableOpacity
						style = {styles.detailButton}
						onPress ={() => this.props.navigation.navigate('MenuTab')}

					>
						<Text>Menu Tab</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style = {styles.detailButton}
						onPress ={() => this.props.navigation.navigate('Notifications')}

					>
						<Text>Notification</Text>
					</TouchableOpacity>
				</ScrollView>

				{/* handle log out*/}
				<TouchableOpacity
					style = {styles.logoutButton }
					onPress ={() => this.props.navigation.navigate('Login')}

				>
					<Text>Logout</Text>
				</TouchableOpacity>
			</SafeAreaView>
    );
  }
}
