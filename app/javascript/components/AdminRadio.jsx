import React from 'react';

class AdminRadio extends React.Component {

    render() {

        return(
            <div className="card mx-auto">
                <div className="card-header">
                    <h2> Radio {this.props.radio.r_name}</h2>
                </div>
                    <div className="card-body">
                        <h4>{this.props.radio.r_url}</h4>
                        <button className="btn-dark button-my" onClick={this.props.clickDelete}>Delete</button>
                        <button className="btn-dark button-my"> Edit </button>
                    </div>
            </div>
        );
    }
}
export default AdminRadio;
