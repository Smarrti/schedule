import React from "react"
import { Tabs } from "antd"
import {
  TableOutlined,
  CalendarOutlined,
  OrderedListOutlined,
} from "@ant-design/icons"
import { MyTable } from "@pages"
import { DataProvider } from "@lib/fetching"

const { TabPane } = Tabs

const App = () => {
  return (
    <DataProvider>
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
          Here must be a calendar!
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
    </DataProvider>
  )
}

export { App }
