import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Button, Drawer, DrawerProps, Layout, Radio, RadioChangeEvent, Space } from "antd";
import { HTMLAttributes, FC, useState } from "react";

export type HomeLayoutProps = HTMLAttributes<HTMLDivElement> & {};

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space direction="vertical" className="w-full">
        <Layout className="min-h-screen">
          <Layout.Header className="h-auto px-0 leading-loose flex flex-col items-center">
            <Navbar />
          </Layout.Header>
          <Layout.Content className="flex-1">
            <Space>
              <Radio.Group value={placement} onChange={onChange}>
                <Radio value="top">top</Radio>
                <Radio value="right">right</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
              </Radio.Group>
              <Button type="primary" onClick={showDrawer}>
                Open
              </Button>
            </Space>
            {children}
          </Layout.Content>
          <Layout.Footer className="w-full flex flex-col items-center p-0 bg-gray-300">
            <Footer />
          </Layout.Footer>
        </Layout>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default HomeLayout;
