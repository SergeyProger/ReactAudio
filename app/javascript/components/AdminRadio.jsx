import React from 'react';

class AdminRadio extends React.Component {
    constructor(props) {
        super(props);
        this.rname = props.radio.r_name;
        this.rurl = props.radio.r_url;
        this.rid = props.radio.id;
    }


    render() {

        return(
            <div className="card mx-auto">
                <div className="card-header">
                    <h2> Radio {this.rname}</h2>
                </div>
                    <div className="card-body">
                        <h4>{this.rurl}</h4>
                        <button className="btn-dark" style={{cursor: 'pointer'}}
                        onClick={this.props.clickDelete}>Delete</button>
                        <button className="btn-dark" style={{cursor: 'pointer'}}>Edit</button>
                    </div>
            </div>
        );
    }
}
export default AdminRadio;
