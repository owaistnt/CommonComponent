import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_outline_streched, button_default} from './button-styles'
import {text_14_medium} from '../textstyle'

const ButtonOutlineStretched = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_medium}
            buttonStyle={button_outline_streched}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonOutlineStretched}