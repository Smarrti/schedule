import {
  CHANGE_TABLE_BG_LECTURE,
  CHANGE_TABLE_BG_PRACTICE,
  CHANGE_TABLE_FONT_COLOR_LECTURE,
  CHANGE_TABLE_FONT_COLOR_PRACTICE,
  GET_TABLE_STYLES_FROM_LS,
  RESET_TABLE_STYLES,
} from "./types"

export const changeTableBgLecture = (payload) => {
  localStorage.setItem("table-bg-lecture", payload)
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
  localStorage.setItem("table-font-lecture", payload)
  return {
    type: CHANGE_TABLE_FONT_COLOR_LECTURE,
    payload,
  }
}

export const changeTableFontColorPractice = (payload) => {
  localStorage.setItem("table-font-practice", payload)
  return {
    type: CHANGE_TABLE_FONT_COLOR_PRACTICE,
    payload,
  }
}

export const resetTableStyles = () => {
  const keys = [
    "table-bg-lecture",
    "table-bg-practice",
    "table-font-lecture",
    "table-font-practice",
  ]

  keys.forEach((key) => localStorage.removeItem(key))

  return {
    type: RESET_TABLE_STYLES,
  }
}

export const getTableStylesFromLS = () => {
  return {
    type: GET_TABLE_STYLES_FROM_LS,
  }
}
