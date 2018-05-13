import {color_secondary} from '../colors'

export const button_default={
    justifyContent:'center',
    alignItems:'center',
    height:48,
    borderRadius:4,
    paddingTop:2,
    paddingBottom:2,
    paddingRight:8,
    paddingLeft:8,
    marginTop:8,
    marginBottom:8,
    marginRight:8,
    marginLeft:8,
}

export const button_streched={
    ...button_default,
    alignSelf:'stretch'
}

export const button_colored={
    ...button_default,
    backgroundColor:color_secondary,
}

export const button_colored_wide={
    ...button_default,
    backgroundColor:color_secondary,
    paddingLeft:24,
    paddingRight:24,
}

export const button_colored_streched={
    ...button_streched,
    ...button_colored_wide,
}