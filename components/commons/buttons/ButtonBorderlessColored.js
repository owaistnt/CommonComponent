import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored, button_default} from './button-styles'
import {TextStyle} from '../../commons'

const ButtonBorderlessColored = (props) => {
    return(
            <AbstractButton 
            textStyle={TextStyle.Text_14.accent_font_bold}
            buttonStyle={button_default}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonBorderlessColored}