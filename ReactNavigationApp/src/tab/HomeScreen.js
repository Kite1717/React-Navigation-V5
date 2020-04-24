import React, { Component } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {CustomHeader} from '../index';
import styles from '../styles/style';

import {RVText} from '../core';

export  class HomeScreen extends Component {
  render() {
    return (
			<SafeAreaView style={{ flex: 1 }}>
				<CustomHeader title={'Home'} isHome={true} navigation={this.props.navigation}/>
				<View style = {styles.textContainer}>
					<RVText content = "Home!"/>
					{/* create screen detail*/}
					<TouchableOpacity
						style = {styles.detailButton}
						// handle go to detail (Do not forget how you registered in which name parameter) name = 'HomeDetail'
						onPress = { () => {this.props.navigation.navigate('HomeDetail')}}
					>
						<RVText  /* it can be override*/ style ={{fontSize : 22}} content = "Go Home detail"/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
    );
  }
}

