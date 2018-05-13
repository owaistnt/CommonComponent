import React from 'react'
import {View} from 'react-native'
import {horizontalStyle} from './container-styles'


const Horizontal=(props)=>{
    return(
        <View style={{...horizontalStyle}}>{props.children}</View>
    );
}

export {Horizontal}