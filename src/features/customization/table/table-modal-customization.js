import React, { useContext } from "react"
import { Style } from "@lib/customization"
import { ModalCustomization } from "../organism/modal-customization"
import { RadioGroups } from "../organism/radio-groups"
import {
  changeBgLecture,
  changeBgPractice,
  changeFontColorLecture,
  changeFontColorPractice,
} from "@lib/customization"

const TableCustomization = () => {
  const { dispatch } = useContext(Style)

  return (
    <ModalCustomization>
      <RadioGroups
        changeBgLecture={(e) => dispatch(changeBgLecture(e.target.value))}
        changeBgPractice={(e) => dispatch(changeBgPractice(e.target.value))}
        changeFontColorLecture={(e) =>
          dispatch(changeFontColorLecture(e.target.value))
        }
        changeFontColorPractice={(e) =>
          dispatch(changeFontColorPractice(e.target.value))
        }
      />
    </ModalCustomization>
  )
}

export { TableCustomization }
