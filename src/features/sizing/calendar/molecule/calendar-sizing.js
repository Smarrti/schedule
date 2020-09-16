import React, { useContext } from "react"
import { RadioGroup, RadioButton } from "@ui"
import { Size } from "@lib/sizing"

const CalendarSizing = () => {
  const { calendarSize, dispatch } = useContext(Size)

  console.log(calendarSize)
  return (
    <RadioGroup defaultValue={calendarSize} onChange={() => dispatch()}>
      <RadioButton value={false} text="Маленький" />
      <RadioButton value={true} text="Большой" />
    </RadioGroup>
  )
}

export { CalendarSizing }
