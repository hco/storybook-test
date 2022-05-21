import {PropsWithChildren} from "react";
import ReactModal from "react-modal";

export const SimpleModal: React.FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
    return (
        <ReactModal
            isOpen={true}
            contentLabel="Minimal Modal Example"
        >
            {children}
        </ReactModal>
    )
}
