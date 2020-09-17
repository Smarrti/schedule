import {
  CHANGE_TABLE_BG_LECTURE,
  CHANGE_TABLE_BG_PRACTICE,
  CHANGE_TABLE_FONT_COLOR_LECTURE,
  CHANGE_TABLE_FONT_COLOR_PRACTICE,
  GET_TABLE_STYLES_FROM_LS,
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
    case CHANGE_TABLE_BG_LECTURE:
      return {
        ...state,
        table: {
          ...state.table,
          lecture: { ...state.table.lecture, background: action.payload },
        },
      }
    case CHANGE_TABLE_BG_PRACTICE:
      return {
        ...state,
        table: {
          ...state.table,
          practice: { ...state.table.practice, background: action.payload },
        },
      }
    case CHANGE_TABLE_FONT_COLOR_LECTURE:
      return {
        ...state,
        table: {
          ...state.table,
          lecture: { ...state.table.practice, fontColor: action.payload },
        },
      }
    case CHANGE_TABLE_FONT_COLOR_PRACTICE:
      return {
        ...state,
        table: {
          ...state.table,
          practice: { ...state.table.practice, fontColor: action.payload },
        },
      }
    case GET_TABLE_STYLES_FROM_LS:
      return {
        ...state,
        table: {
          ...state.table,
          lecture: {
            ...state.table.lecture,
            background: localStorage.getItem("table-bg-lecture") || "blueBG",
            fontColor:
              localStorage.getItem("table-font-lecture") || "blackFont",
          },
          practice: {
            ...state.table.practice,
            background: localStorage.getItem("table-bg-practice") || "orangeBG",
            fontColor:
              localStorage.getItem("table-font-practice") || "blackFont",
          },
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
