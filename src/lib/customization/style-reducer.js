import {
  CHANGE_BG_LECTURE,
  CHANGE_BG_PRACTICE,
  CHANGE_FONT_COLOR_LECTURE,
  CHANGE_FONT_COLOR_PRACTICE,
  RESET_TABLE_STYLES,
} from "./types"

export const styleStore = {
  table: {
    lecture: {
      background: "blueBG",
      fontColor: "blackFont",
    },
    practice: {
      background: "orangeBG",
      fontColor: "blackFont",
    },
  },
}

export const styleReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_BG_LECTURE:
      return {
        ...state,
        table: {
          ...state.table,
          lecture: { ...state.table.lecture, background: action.payload },
        },
      }
    case CHANGE_BG_PRACTICE:
      return {
        ...state,
        table: {
          ...state.table,
          practice: { ...state.table.practice, background: action.payload },
        },
      }
    case CHANGE_FONT_COLOR_LECTURE:
      return {
        ...state,
        table: {
          ...state.table,
          lecture: { ...state.table.practice, fontColor: action.payload },
        },
      }
    case CHANGE_FONT_COLOR_PRACTICE:
      return {
        ...state,
        table: {
          ...state.table,
          practice: { ...state.table.practice, fontColor: action.payload },
        },
      }
    case RESET_TABLE_STYLES:
      return {
        ...state,
        table: {
          ...state.table,
          lecture: {
            ...state.table.lecture,
            background: "blueBG",
            fontColor: "blackFont",
          },
          practice: {
            ...state.table.practice,
            background: "orangeBG",
            fontColor: "blackFont",
          },
        },
      }
    default:
      return { ...state }
  }
}
