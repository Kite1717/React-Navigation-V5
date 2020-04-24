import {StyleSheet} from "react-native";

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
	},
	logoutButton : {


		marginLeft : 10,
		marginBottom : 10,
	}
});

export default  styles;
