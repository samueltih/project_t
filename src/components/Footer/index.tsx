import { FunctionComponent, HTMLAttributes } from "react";
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import cx from "classnames";
import { List, Space, Typography } from "antd";
import { Facebook, Linkedin, Twitter } from "react-bootstrap-icons";
import Link from "next/link";
import Logo from "@components/Logo";

type FooterProps = HTMLAttributes<HTMLDivElement> & {};

const Footer: FunctionComponent<FooterProps> = ({ ...props }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-screen-2xl w-full flex gap-2 p-4">
          <div className="flex-1 flex flex-col gap-2">
            <Logo />
            <div>
              Dakar Sacré-cœur 3 Villa 9305 Tel: +221 33 865 14 50 E-mail:
              client@sentechniciens.com
            </div>
          </div>
          <div className="flex-1">SENTECHNICIEN</div>
          <div className="flex-1">
            <Typography.Title level={4}>Our Company</Typography.Title>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/FAQ">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-2 items-stretch">
            <p className="text-xl font-bold">
              Get the app on PlayStore or App Store
            </p>
            <div className="flex items-center justify-center gap-2">
              <span>PlayStore</span>
              <span>AppStore</span>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl w-full flex gap-8 items-center p-4 text-sm">
              <Link href="#">Terms of Service</Link>
              <Link href="privacy">Privacy Policy</Link>
              <Link href="#">CA Notice at Collection</Link>
              <Link href="#">Cookie Settings</Link>
              <Link href="#">Accessibility</Link>
            </div>
      </div>

      <div className="w-full flex flex-col items-center bg-stone-50">
        <div className="flex max-w-screen-2xl w-full p-4">
          <div className="flex-1">Sentechnicien © All Rights Reserved</div>
          <Space className="flex-1 justify-end text-lg" size={10}>
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Linkedin /></Link>
            <Link href="#"><Twitter /></Link>
          </Space>
        </div>
      </div>
    </>
  );
};

export default Footer;
