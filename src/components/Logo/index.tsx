import { FunctionComponent } from "react";
import cx from "classnames";

const Logo: FunctionComponent<any> = ({...props}) => {
    return (<div {...{...props, className: cx("font-bold text-4xl", props.className)}}>SENTECHNICIEN</div>)
}

export default Logo;