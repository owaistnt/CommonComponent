import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored, button_colored_wide} from './button-styles'
import { text_14_accent, text_14_white_medium} from '../textstyle'

const ButtonColoredWide = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_white_medium}
            buttonStyle={button_colored_wide}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonColoredWide}