import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_outline_colored} from './button-styles'
import {TextStyle} from '../../commons'


const ButtonOutlineColored = (props) => {
    return(
            <AbstractButton 
            textStyle={TextStyle.Text_14.accent_font_bold}
            buttonStyle={button_outline_colored}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonOutlineColored}