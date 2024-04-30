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
      label: "Pathways"
    },
    {
      key: "career",
      label: "School Career"
    },
    {
      key: "skill",
      label: "Skills"
    }
  ];

  return (
    <Menu mode="horizontal" className="menubar backdrop:inset-10">
      {menuItems.map((item, index) => {
        if (item.type === "divider") {
          return <Menu.Divider key={index} style={item.style} />;
        }
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default App;
