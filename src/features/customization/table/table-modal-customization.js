import React, { useContext } from "react"
import { Style } from "@lib/customization"
import { ModalCustomization } from "../organism/modal-customization"
import { RadioGroups } from "../organism/radio-groups"
import {
  changeTableBgLecture,
  changeTableBgPractice,
  changeTableFontColorLecture,
  changeTableFontColorPractice,
} from "@lib/customization"
import { resetTableStyles } from "@lib/customization"

const TableCustomization = () => {
  const { dispatch } = useContext(Style)

  return (
    <ModalCustomization resetStyles={() => dispatch(resetTableStyles())}>
      <RadioGroups
        changeBgLecture={(e) => dispatch(changeTableBgLecture(e.target.value))}
        changeBgPractice={(e) =>
          dispatch(changeTableBgPractice(e.target.value))
        }
        changeFontColorLecture={(e) =>
          dispatch(changeTableFontColorLecture(e.target.value))
        }
        changeFontColorPractice={(e) =>
          dispatch(changeTableFontColorPractice(e.target.value))
        }
      />
    </ModalCustomization>
  )
}

export { TableCustomization }
