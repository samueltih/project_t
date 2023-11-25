import { Avatar, Badge, Button, Menu, MenuProps, Space } from "antd";
import {
  ChatSquareDots,
  Bell,
  Translate,
  Facebook,
  Linkedin,
  Twitter,
  PersonCircle,
} from "react-bootstrap-icons";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import Pusher from "pusher-js";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag"

export type NavbarProps = HTMLAttributes<HTMLDivElement> & {};

const items: MenuProps["items"] = [
  {
    label: (
      <Link
        href="about-us"
        className="h-full py-2 flex items-center justify-center"
      >
        Accueil
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link
        href="about-us"
        className="h-full py-2 flex items-center justify-center"
      >
        Techniciens
      </Link>
    ),
    key: "workers",
  },
  {
    label: (
      <Link
        href="about-us"
        className="h-full py-2 flex items-center justify-center"
      >
        A Propos
      </Link>
    ),
    key: "about-us",
  },
  {
    label: (
      <Link
        href="services"
        className="h-full py-2 flex items-center justify-center"
      >
        Services
      </Link>
    ),
    key: "services",
  },
];

const userItems: MenuProps["items"] = [
  {
    key: "translate",
    className: "!flex items-center justify-center",
    icon: (
      <div className="w-full flex justify-center">
        <Badge count={5}>
          <Translate />
        </Badge>
      </div>
    ),
    children: [
      {
        label: "French",
        icon: <ReactCountryFlag countryCode="FR" />,
        key: "fr"
      },
      {
        label: "English",
        icon: <ReactCountryFlag countryCode="US" />,
        key: "fr"
      },
    ],
  },
  {
    key: "messages",
    className: "!flex items-center justify-center",
    icon: (
      <div className="w-full flex justify-center">
        <Badge count={5}>
          <ChatSquareDots />
        </Badge>
      </div>
    ),
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "notifications",
    className: "!flex items-center justify-center",
    icon: (
      <div className="w-full flex justify-center">
        <Badge count={5}>
          <Bell />
        </Badge>
      </div>
    ),
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <Space wrap size={8} className="py-2">
        <Avatar
          size={32}
          className="flex items-center justify-center"
          icon={<PersonCircle />}
        />
        <div>John Doe</div>
      </Space>
    ),
    key: "user",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

const Navbar: FC<NavbarProps> = ({}) => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  useEffect(() => {
    if (typeof window != undefined) {
      Pusher.logToConsole = true;

      var pusher = new Pusher("213865c4a2397d491896", {
        cluster: "eu",
      });

      var channel = pusher.subscribe("my-channel");
      channel.bind("my-event", (data: any) => {
        alert(JSON.stringify(data));
      });
    }
  }, []);

  return (
    <>
      <div className="w-full flex justify-center bg-gray-100">
        <div className="max-w-screen-2xl w-full h-auto px-4 py-2 flex items-center">
          <Space className="flex-1 text-lg" size={12}>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Linkedin />
            </Link>
            <Link href="#">
              <Twitter />
            </Link>
          </Space>
          <Space className="flex-1 flex justify-end text-xs">
            Phone number: +237 6 99 99 99 99
          </Space>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white">
        <div className="max-w-screen-2xl w-full px-4 flex justify-between items-stretch bg-white">
          <span className="bg-white text-xl font-bold flex items-center">
            SENTECHNICIEN
          </span>
          <Menu
            className="flex justify-center"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
          <Menu
            className="flex justify-end"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={userItems}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
