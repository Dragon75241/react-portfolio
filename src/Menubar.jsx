import "./styles/Menubar.css";
import { Menu } from "antd";

const App = () => {
  const menuItems = [
    {
      key: "home",
      label: "Stevyn Shawcroft",
    },
    {
      type: "divider",
      style: { flexGrow: 1, order: 1 },
    },
    {
      key: "cover",
      label: "Cover",
    },
    {
      key: "abtme",
      label: "About Me",
    },
    {
      key: "hobbies",
      label: "Hobbies",
    },
    {
      key: "links",
      label: "Links",
    },
    {
      key: "path",
      label: "Pathways",
    },
    {
      key: "career",
      label: "School Career",
      children: [
        { key: "six", label: "6th Grade" },
        { key: "seven", label: "7th Grade" },
        { key: "eight", label: "8th Grade" },
      ],
    },
    {
      key: "skill",
      label: "Skills",
    },
  ];

  const renderMenuItem = (item) => {
    if (item.type === "divider") {
      return <Menu.Divider key={item.key} style={item.style} />;
    }

    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
          {item.children.map(renderMenuItem)}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    );
  };

  return (
    <Menu mode="horizontal" className="menubar backdrop:inset-10">
      {menuItems.map(renderMenuItem)}
    </Menu>
  );
};

export default App;
