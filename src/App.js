import React from "react"
import { Tabs } from "antd"
import {
  TableOutlined,
  CalendarOutlined,
  OrderedListOutlined,
} from "@ant-design/icons"
import { MyTable } from "@pages"
import { MyCalendar } from "@pages"
import { DataProvider } from "@lib/fetching"
import { SizeContext } from "@lib/sizing"
import { StyleContext } from "@lib/customization"
import { Header } from "./pages"

const { TabPane } = Tabs

const App = () => {
  return (
    <DataProvider>
      <StyleContext>
        <Header />
        <SizeContext>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <TableOutlined />
                  Таблица
                </span>
              }
              key="1"
            >
              <MyTable />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <CalendarOutlined />
                  Календарь
                </span>
              }
              key="2"
            >
              <MyCalendar />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <OrderedListOutlined />
                  Список
                </span>
              }
              key="3"
            >
              Here must be a list!
            </TabPane>
          </Tabs>
        </SizeContext>
      </StyleContext>
    </DataProvider>
  )
}

export { App }
