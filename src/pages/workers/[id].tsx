import HomeLayout from "@layouts/HomeLayout";
import { NextPageWithLayout } from "@pages/_app";
import { Head } from "next/document";
import { ReactElement } from "react";

const WorkerDetailsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Job detail</title>
      </Head>
    </>
  );
};

WorkerDetailsPage.getLayout = (page: ReactElement) => (
  <HomeLayout>{page}</HomeLayout>
);

export default WorkerDetailsPage;
