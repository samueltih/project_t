import HomeLayout from "@layouts/HomeLayout";
import { NextPageWithLayout } from "@pages/_app";
import { Head } from "next/document";
import { ReactElement } from "react";

const JobDetailsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Job detail</title>
      </Head>
    </>
  );
};

JobDetailsPage.getLayout = (page: ReactElement) => (
  <HomeLayout>{page}</HomeLayout>
);

export default JobDetailsPage;
