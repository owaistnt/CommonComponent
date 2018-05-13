import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored, button_default} from './button-styles'
import {text_14_color_white, text_14_accent, text_14_white_medium, text_14_bold} from '../textstyle'

const ButtonBorderless = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_bold}
            buttonStyle={button_default}>{props.children}</AbstractButton>
    );
}

export {ButtonBorderless}