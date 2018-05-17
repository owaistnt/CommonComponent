import React from 'react'
import { View } from 'react-native'
import { AbstractButton } from './AbstractButton'
import {button_colored} from './button-styles'
import {TextStyle} from '../../commons'

const ButtonColored = (props) => {
    return(
            <AbstractButton 
            textStyle={TextStyle.Text_14.color_white_medium}
            buttonStyle={button_colored}
            _onPress={props._onPress}>{props.children}</AbstractButton>
    );
}

export {ButtonColored}