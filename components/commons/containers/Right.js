import React from 'react'
import {View} from 'react-native'
import {rightHorizontal} from './container-styles'


const Right=(props)=>{
    return(
        <View style={{...rightHorizontal, ...props.style}}>{props.children}</View>
    );
}

export {Right}