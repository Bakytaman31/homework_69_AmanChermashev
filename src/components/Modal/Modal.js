import React, {Component} from 'react';

class Modal extends Component {
    render() {
        return (
            <div>
                <h3>Enter your contact data</h3>
                <form>
                    <input type="text" name="name"/>
                    <input type="mail" name="mail"/>
                    <input type="text" name="address"/>
                    <input type="text" name="postal"/>
                </form>
            </div>
        );
    }
}

export default Modal;