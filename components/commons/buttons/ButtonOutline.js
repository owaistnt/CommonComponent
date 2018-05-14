import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_outline} from './button-styles'
import {text_14_medium} from '../textstyle'

const ButtonOutline = (props) => {
    return(
            <AbstractButton 
            textStyle={text_14_medium}
            buttonStyle={button_outline}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonOutline}