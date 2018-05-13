import React from 'react'
import {View} from 'react-native'
import {verticalStyle} from './container-styles'


const Vertical=(props)=>{
    return(
        <View style={{...verticalStyle}}>{props.children}</View>
    );
}

export {Vertical}