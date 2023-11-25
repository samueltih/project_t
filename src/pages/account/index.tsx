import HomeLayout from "@layouts/HomeLayout";
import { NextPageWithLayout } from "@pages/_app";
import { Head } from "next/document";
import { ReactElement } from "react";

const AccountOverviewPage: NextPageWithLayout = () => {
    return (<>
        <Head>
            <title>Account Overview</title>
        </Head>
    </>)
}

AccountOverviewPage.getLayout = (page: ReactElement) => (<HomeLayout>

</HomeLayout>)

export default AccountOverviewPage;