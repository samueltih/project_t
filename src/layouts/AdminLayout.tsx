import { HTMLAttributes, FC } from "react";

export type AdminLayoutProps = HTMLAttributes<HTMLDivElement> & {}

const AdminLayout: FC<AdminLayoutProps> = ({children, ...props}) => {
    return (<div {...props}>
        <aside>
            
        </aside>
        <main>{children}</main>
    </div>)
}

export default AdminLayout;