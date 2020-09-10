export const sizes = {
  tableSize: "middle",
}

export const sizeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TABLE_SIZE":
      localStorage.setItem("table-size", action.payload)
      return { ...state, tableSize: action.payload }

    case "GET_SIZES_FROM_LS":
      const sizeReceivedFromLS = localStorage.getItem("table-size")
      return sizeReceivedFromLS
        ? { ...state, tableSize: sizeReceivedFromLS }
        : { ...state }

    default:
      return { ...state }
  }
}
