// @flow

import React from "react";
import styles from "./Modal.css";
import classNames from "classnames";

type IProps = {
    onClose: () => void;
    width?: number;
    showShadow: boolean;
    showClose?: boolean;
    children?: any;
}

class Modal extends React.Component {
    props: IProps;

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={classNames(styles.modal, styles.modal_overflow) }
                 ref="modal" id="modal">
                <div
                    className={classNames(this.props.showShadow ? styles.shadow : styles.shadowtransparent) }>
                    <div className={styles.content}
                         style={{ width: this.props.width }}
                         onClick={e => e.stopPropagation()}>
                        {this.props.showClose && <a href="javascript:"
                                                    className={styles.close}
                                                    onClick={this.handleClose}></a>}
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleNativeKey);
        document.body.classList.add(styles.modal_opened);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleNativeKey);
        document.body.classList.remove(styles.modal_opened);
    }

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    handleNativeKey = (event: any) => {
        if (event.keyCode === 27 && this.props.onClose) {
            this.props.onClose();
        }
    }
}

export default Modal;
