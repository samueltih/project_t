import { HTMLAttributes, FC } from "react";

export type HomeLayoutProps = HTMLAttributes<HTMLDivElement> & {};

const HomeLayout: FC<HomeLayoutProps> = ({children}) => {
    return (<div>
        <main>{children}</main>
    </div>)
}

export default HomeLayout;