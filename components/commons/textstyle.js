import {
    color_primary,
    color_text_dark,
    color_text_light,
    color_secondary,
    color_offer
} from './colors'

/* 
Font Weights
regular 400
thin 100
light 300
medium 500
bold 700
black 900
 */


const ROBOTO_THIN = '100';
const ROBOTO_LIGHT = '300';
const ROBOTO_REGULAR = '400';
const ROBOTO_MEDIUM = '500';
const ROBOTO_BOLD = '700';
const ROBOTO_BLACK = '900';


export const text_10 = {
    fontSize: 10
}

export const text_10_medium = {
    ...text_10,
    fontWeight: ROBOTO_MEDIUM
}

export const text_10_light = {
    ...text_10,
    fontWeight: ROBOTO_LIGHT
}

export const text_10_bold = {
    ...text_10,
    fontWeight: ROBOTO_BOLD
}


export const text_10_thin = {
    ...text_10,
    fontWeight: ROBOTO_THIN
}

export const text_10_primary = {
    ...text_10,
    color: color_primary,
}

export const text_10_accent = {
    ...text_10,
    color: color_secondary,
}

export const text_10_color_black = {
    ...text_10,
    color: color_text_dark,
}

export const text_10_color_white = {
    ...text_10,
    color: color_text_light,
}

export const text_10_color_offer = {
    ...text_10,
    color: color_offer,
}



//Size 12
export const text_12 = {
    fontSize: 12
}

export const text_12_medium = {
    ...text_12,
    fontWeight: ROBOTO_MEDIUM
}

export const text_12_light = {
    ...text_12,
    fontWeight: ROBOTO_LIGHT
}

export const text_12_bold = {
    ...text_12,
    fontWeight: ROBOTO_BOLD
}


export const text_12_thin = {
    ...text_12,
    fontWeight: ROBOTO_THIN
}

export const text_12_primary = {
    ...text_12,
    color: color_primary,
}

export const text_12_accent = {
    ...text_12,
    color: color_secondary,
}

export const text_12_color_black = {
    ...text_12,
    color: color_text_light,
}

export const text_12_color_white = {
    ...text_12,
    color: color_text_dark,
}

export const text_12_white_medium = {
    ...text_12_medium,
    color: color_text_dark,
}

export const text_12_color_offer = {
    ...text_12,
    color: color_offer,
}


//Size 14
export const text_14 = {
    fontSize: 14
}

export const text_14_medium = {
    ...text_14,
    fontWeight: ROBOTO_MEDIUM
}

export const text_14_light = {
    ...text_14,
    fontWeight: ROBOTO_LIGHT
}

export const text_14_bold = {
    ...text_14,
    fontWeight: ROBOTO_BOLD
}


export const text_14_thin = {
    ...text_14,
    fontWeight: ROBOTO_THIN
}

export const text_14_primary = {
    ...text_14,
    color: color_primary,
}

export const text_14_primary_bold={
    ...text_14_primary,
    ...text_14_bold,
}

export const text_14_accent = {
    ...text_14,
    color: color_secondary,
}

export const text_14_accent_bold={
    ...text_14_accent,
    ...text_14_bold,
}

export const text_14_color_black = {
    ...text_14,
    color: color_text_light,
}

export const text_14_color_white = {
    ...text_14,
    color: color_text_dark,
}

export const text_14_color_offer = {
    ...text_14,
    color: color_offer,
}

export const text_14_white_medium = {
    ...text_14_medium,
    color: color_text_dark,
}
