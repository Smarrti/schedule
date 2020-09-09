import React, { useContext, useEffect } from "react"
import { RadioGroup, RadioButton } from "@ui"
import { Size } from "@lib/sizing"

const TableSizing = () => {
  const { tableSize, dispatch } = useContext(Size)

  useEffect(() => {
    dispatch({ type: "GET_SIZES_FROM_LS" })
  }, [dispatch])

  return (
    <RadioGroup
      value={tableSize}
      onChange={(e) =>
        dispatch({ type: "CHANGE_TABLE_SIZE", payload: e.target.value })
      }
    >
      <RadioButton value="middle" text="Средний" />
      <RadioButton value="small" text="Маленький" />
      <RadioButton value="default" text="Большой" />
    </RadioGroup>
  )
}

export { TableSizing }
