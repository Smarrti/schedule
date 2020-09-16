import {
  CHANGE_BG_LECTURE,
  CHANGE_BG_PRACTICE,
  CHANGE_FONT_COLOR_LECTURE,
  CHANGE_FONT_COLOR_PRACTICE,
} from "./types"

export const changeBgLecture = (payload) => {
  return {
    type: CHANGE_BG_LECTURE,
    payload,
  }
}

export const changeBgPractice = (payload) => {
  return {
    type: CHANGE_BG_PRACTICE,
    payload,
  }
}

export const changeFontColorLecture = (payload) => {
  return {
    type: CHANGE_FONT_COLOR_LECTURE,
    payload,
  }
}

export const changeFontColorPractice = (payload) => {
  return {
    type: CHANGE_FONT_COLOR_PRACTICE,
    payload,
  }
}
