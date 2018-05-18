import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_outline_streched} from './button-styles'
import {TextStyle} from '../../commons'


const ButtonOutlineStretched = (props) => {
    return(
            <AbstractButton 
            textStyle={TextStyle.Text_14.font_medium}
            buttonStyle={button_outline_streched}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonOutlineStretched}