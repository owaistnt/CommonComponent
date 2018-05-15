import React from 'react'
import { View } from 'react-native'
import {COLOR_PALLETE, color_divider} from '../colors'


const CardSection = (props) => {
    return (
        <View style={{...styles.sectionStyle, ...props.style}}>{props.children}</View>
    );
}

const styles = {
    sectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: COLOR_PALLETE.white,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: color_divider,
        position: 'relative',
    }
}


export {CardSection}