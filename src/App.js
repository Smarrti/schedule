import React from "react";
import { Tabs } from "antd";
import {
  TableOutlined,
  CalendarOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { MyTable, MyCalendar, Header } from "@pages";
import { SizeContext } from "@lib/sizing";
import { StyleContext } from "@lib/customization";
import { RoleContext } from "@lib/roles";
import { Provider } from "react-redux";
import store from "./lib/redux/store";

const { TabPane } = Tabs;

const App = () => {
  return (
    <Provider store={store}>
      <RoleContext>
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
      </RoleContext>
    </Provider>
  );
};

export { App };
