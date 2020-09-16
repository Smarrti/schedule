import React, { useContext, useEffect } from "react"
import { Style } from "@lib/customization"
import { ModalCustomization } from "../organism/modal-customization"
import { RadioGroups } from "../organism/radio-groups"
import {
  changeTableBgLecture,
  changeTableBgPractice,
  changeTableFontColorLecture,
  changeTableFontColorPractice,
  resetTableStyles,
  getTableStylesFromLS,
} from "@lib/customization"

const TableCustomization = () => {
  const { table, dispatch } = useContext(Style)

  useEffect(() => {
    dispatch(getTableStylesFromLS())
  }, [dispatch])

  return (
    <ModalCustomization resetStyles={() => dispatch(resetTableStyles())}>
      <RadioGroups
        lectureBg={table.lecture.background}
        practiceBg={table.practice.background}
        lectureFont={table.lecture.fontColor}
        practiceFont={table.practice.fontColor}
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
