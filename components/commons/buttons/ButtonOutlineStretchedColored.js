import React from 'react'
import { View } from 'react-native'
import  {AbstractButton}  from './AbstractButton'
import {button_outline_streched_colored} from './button-styles'
import {text_14_accent_medium} from '../textstyle'

const ButtonOutlineStretchedColored = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_accent_medium}
            buttonStyle={button_outline_streched_colored}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonOutlineStretchedColored}