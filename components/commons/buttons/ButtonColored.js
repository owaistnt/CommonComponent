import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored} from './button-styles'
import {text_14_color_white, text_14_accent, text_14_white_medium} from '../textstyle'

const ButtonColored = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_white_medium}
            buttonStyle={button_colored}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonColored}