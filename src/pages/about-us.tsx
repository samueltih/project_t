import Navbar from "@/components/Navbar";
import { NextPage } from "next";

const AboutUsPage: NextPage = ({}) => {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold">Sentechnicien</h1>
      <div className="flex gap-4 w-full">
        <span>Nous sommes bons</span>
        <span>Nous sommes forts</span>
        <span>Nous sommes brillants</span>
      </div>
    </>
  );
};

export default AboutUsPage;
