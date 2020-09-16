import React, { useContext } from "react"
import { RadioGroup, RadioButton } from "@ui"
import { Size, changeCalendarSize } from "@lib/sizing"

const CalendarSizing = () => {
  const { calendarSize, dispatch } = useContext(Size)

  console.log(typeof calendarSize, calendarSize)
  return (
    <RadioGroup
      defaultValue={calendarSize}
      onChange={(e) => dispatch(changeCalendarSize(e.target.value))}
    >
      <RadioButton value="small" text="Маленький" />
      <RadioButton value="big" text="Большой" />
    </RadioGroup>
  )
}

export { CalendarSizing }
