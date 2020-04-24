import React, { Component } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {IMAGE} from './constants/Image';
import styles from './styles/style';
/**HEADER**/
export  class CustomHeader extends Component { // I sent the title as a props
	//****boolean default value false****
  render() {
  	let  {navigation ,isHome,title } = this.props
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
									source = {IMAGE.ICON_MENU}
									resizeMode = 'contain'
								/>
							</TouchableOpacity>
							:
							<TouchableOpacity
								style ={styles.backButtonContainer}
								onPress = {() =>navigation.goBack()}
							>
								<Image
									style = {styles.icon}
									source = {IMAGE.ICON_BACK}
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


