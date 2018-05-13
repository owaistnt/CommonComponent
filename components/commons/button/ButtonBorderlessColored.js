import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored, button_default} from './button-styles'
import {text_14_accent_bold} from '../textstyle'

const ButtonBorderlessColored = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_accent_bold}
            buttonStyle={button_default}>{props.children}</AbstractButton>
    );
}

export {ButtonBorderlessColored}