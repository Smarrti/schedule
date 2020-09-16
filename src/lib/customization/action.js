import {
  CHANGE_TABLE_BG_LECTURE,
  CHANGE_TABLE_BG_PRACTICE,
  CHANGE_TABLE_FONT_COLOR_LECTURE,
  CHANGE_TABLE_FONT_COLOR_PRACTICE,
  GET_TABLE_STYLES_FROM_LS,
  RESET_TABLE_STYLES,
} from "./types"

export const changeTableBgLecture = (payload) => {
  return {
    type: CHANGE_TABLE_BG_LECTURE,
    payload,
  }
}

export const changeTableBgPractice = (payload) => {
  localStorage.setItem("table-bg-practice", payload)
  return {
    type: CHANGE_TABLE_BG_PRACTICE,
    payload,
  }
}

export const changeTableFontColorLecture = (payload) => {
  return {
    type: CHANGE_TABLE_FONT_COLOR_LECTURE,
    payload,
  }
}

export const changeTableFontColorPractice = (payload) => {
  return {
    type: CHANGE_TABLE_FONT_COLOR_PRACTICE,
    payload,
  }
}

export const resetTableStyles = () => {
  return {
    type: RESET_TABLE_STYLES,
  }
}

export const getTableStylesFromLS = () => {
  return {
    type: GET_TABLE_STYLES_FROM_LS,
  }
}
