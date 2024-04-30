import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Menu } from "antd";

const items = [
  {
    label: "Navigation One",
    key: "mail",
  },
  {
    label: "Navigation Two",
    key: "app",
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

function Menubar() {
  const [current, setCurrent] = useState("mail");

  const { darkAlgorithm } = theme;

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const renderLeftItem = () => (
    <Menu.Item key="leftItem" onClick={onClick}>
      Left Item
    </Menu.Item>
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-end w-full">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={[renderLeftItem(), ...items]}
          />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Menubar;
