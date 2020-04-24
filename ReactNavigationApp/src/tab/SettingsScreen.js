import React, { Component } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {CustomHeader} from '../index';
import styles from '../styles/style';

import {RVText} from '../core';

export  class SettingsScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Setting'} isHome={true} navigation={this.props.navigation}/>
				<View style = {styles.textContainer}>
					<RVText content = "Settings!"/>
					<TouchableOpacity
						onPress = { () => {this.props.navigation.navigate('SettingDetail')}}
						style = {styles.detailButton}
					>
						<RVText  /* it can be override*/ style = {{fontSize : 24}} content = "Go Setting detail"/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
    );
  }
}

