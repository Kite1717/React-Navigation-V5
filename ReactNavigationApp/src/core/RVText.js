import React, { Component } from 'react';
import { Text } from 'react-native';

//handle view(Text) common
export  class RVText extends Component {

	constructor(props) {
		super(props)
	}
  render() {

		const {content ,style} = this.props;
    return (
     <Text {...this.props} style = {[{fontSize : 16} , style]}>{content}</Text>
    );
  }
}

