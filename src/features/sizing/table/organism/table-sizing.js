import React, { useContext, useEffect } from "react"
import { RadioGroup, RadioButton } from "@ui"
import { Size, changeTableSize } from "@lib/sizing"

const TableSizing = () => {
  const { tableSize, dispatch } = useContext(Size)

  useEffect(() => {
    dispatch({ type: "GET_SIZES_FROM_LS" })
  }, [dispatch])

  return (
    <RadioGroup
      value={tableSize}
      onChange={(e) => dispatch(changeTableSize(e.target.value))}
    >
      <RadioButton value="middle" text="Средний" />
      <RadioButton value="small" text="Маленький" />
      <RadioButton value="default" text="Большой" />
    </RadioGroup>
  )
}

export { TableSizing }
