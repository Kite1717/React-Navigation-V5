import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/**HEADER**/
export default class CustomHeader extends Component { // I sent the title as a props
	//****boolean default value false****
  render() {
    return (
			<View style = {styles.customHeaderContainer}>
				<View style = {[styles.cellContainer , {flex : 1}]}>
					{
						// handle button back
						// header will appear on the main page
						// otherwise the back button will appear
						isHome ?
							<TouchableOpacity  // handle menu icon for open drawer navigator
								onPress = {() => navigation.openDrawer()}
							>

								<Image
									style = {styles.icon}
									source = {require('./src/assets/icons/menu.png')}
									resizeMode = 'contain'
								/>
							</TouchableOpacity>
							:
							<TouchableOpacity
								style ={styles.backButtonContainer}
								onPress = {() => navigation.goBack()}
							>
								<Image
									style = {styles.icon}
									source = {require('./src/assets/icons/back.png')}
									resizeMode = 'contain'
								/>
								<Text style ={{marginLeft: 5}}>Back</Text>
							</TouchableOpacity>
					}

				</View>
				<View style = {[styles.cellContainer , {flex : 1.5}]}>
					<Text style ={styles.text}>{title}</Text>
				</View>
				<View style = {[styles.cellContainer , {flex : 1}]}></View>
			</View>
    );
  }
}

const styles = StyleSheet.create({

	customHeaderContainer : {
		flexDirection : 'row',
		height : 50,

		//activate the title you want to edit
		//borderWidth : 1,
		//borderColor : 'red',

	},
	textContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	cellContainer : {
		flex : 1,
		justifyContent: 'center',

		//activate the title you want to edit
		//borderWidth:  1,
		//borderColor: 'red',


	},
	text :{
		textAlign : 'center',
	},
	icon : {
		width : 20,
		height:  20,
		marginLeft : 5,

	},
	detailButton : {

		marginTop : 20,
	},
	backButtonContainer : {
		flexDirection: 'row',
		alignItems:  'center',

	},
	tabIcon :{
		width: 20,
		height : 20,
	},
	drawerContentContainer :{
		flex : 1,

	},
	scrollContainer : {
		marginLeft:  5,
	},
	profileContainer : {

		height :150,
		justifyContent :'center',
		alignItems : 'center',
	},
	profileIcon :{
		height : 120,
		width : 120,
		borderRadius : 60,
	}
});
