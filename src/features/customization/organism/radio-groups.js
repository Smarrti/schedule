import React from "react"
import { Tabs } from "antd"
import { RadioButton } from "@ui"
import { RadioSection } from "../molecules"
import classes from "../style.module.css"

const { TabPane } = Tabs

const RadioGroups = ({
  changeBgLecture,
  changeBgPractice,
  changeFontColorLecture,
  changeFontColorPractice,
}) => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Лекции" key="1">
        <RadioSection
          title="Фон:"
          defaultValue="blueBG"
          onChange={changeBgLecture}
        >
          <RadioButton className={classes.blueBG} value="blueBG" text="Синий" />
          <RadioButton
            className={classes.orangeBG}
            value="orangeBG"
            text="Желтый"
          />
          <RadioButton
            className={classes.greenBG}
            value="greenBG"
            text="Зеленый"
          />
          <RadioButton className={classes.redBG} value="redBG" text="Красный" />
        </RadioSection>
        <RadioSection
          title="Цвет шрифта:"
          defaultValue="blackFont"
          onChange={changeFontColorLecture}
        >
          <RadioButton
            className={classes.blackFont}
            value="blackFont"
            text="Черный"
          />
          <RadioButton
            className={classes.blueFont}
            value="blueFont"
            text="Синий"
          />
          <RadioButton
            className={classes.greenFont}
            value="greenFont"
            text="Зеленый"
          />
          <RadioButton
            className={classes.redFont}
            value="redFont"
            text="Красный"
          />
        </RadioSection>
      </TabPane>
      <TabPane tab="Практические занятия" key="2">
        <RadioSection
          title="Фон:"
          defaultValue="orangeBG"
          onChange={changeBgPractice}
        >
          <RadioButton
            className={classes.orangeBG}
            value="orangeBG"
            text="Желтый"
          />
          <RadioButton className={classes.blueBG} value="blueBG" text="Синий" />
          <RadioButton
            className={classes.greenBG}
            value="greenBG"
            text="Зеленый"
          />
          <RadioButton className={classes.redBG} value="redBG" text="Красный" />
        </RadioSection>
        <RadioSection
          title="Цвет шрифта:"
          defaultValue="blackFont"
          onChange={changeFontColorPractice}
        >
          <RadioButton
            className={classes.blackFont}
            value="blackFont"
            text="Черный"
          />
          <RadioButton
            className={classes.blueFont}
            value="blueFont"
            text="Синий"
          />
          <RadioButton
            className={classes.greenFont}
            value="greenFont"
            text="Зеленый"
          />
          <RadioButton
            className={classes.redFont}
            value="redFont"
            text="Красный"
          />
        </RadioSection>
      </TabPane>
    </Tabs>
  )
}

export { RadioGroups }
