import { CHANGE_TABLE_SIZE } from "./types"

export const changeTableSize = (payload) => {
  localStorage.setItem("table-size", payload)
  return {
    type: CHANGE_TABLE_SIZE,
    payload,
  }
}
