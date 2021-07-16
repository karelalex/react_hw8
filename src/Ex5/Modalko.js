import React from "react";
import {Button, Modal, Paper} from "@material-ui/core";
import './Modalko.css'

export class Modalko extends React.PureComponent {
    state = {
        open: false
    }

    handleClose = () => this.setState({open: false})

    handleOpen = () => this.setState({open: true})

    render() {
        return (
            <Paper>
                <Button onClick={this.handleOpen}>Показать модалку</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    {this.props.children}
                </Modal>
            </Paper>
        )
    }
}

export class ModalkoText extends Modalko {
    render() {
        return (
            <Paper>
                <Button onClick={this.handleOpen}>Показать модалку</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <p className="content">Очень умный и важный текст</p>
                </Modal>
            </Paper>
        )
    }
}
