import React from 'react';
import $ from 'jquery/dist/jquery';

class NewRadio extends React.Component{
    state = {
        newRad: false
    };

    handleClick = () => {
        let name    = this.refs.name.value;
        let url = this.refs.url.value;
        $.ajax({
            url: '/radio/',
            type: 'POST',
            data: { radio: { r_name: name, r_url: url } },
            success: (radioNew) => {
                console.log(radioNew);
                this.props.handleSubmit(radioNew);
            }
        });
    }
    render() {
        return (
            <div className="list-group">
                Add radio.
                <input ref='name' placeholder='Enter the name of the radio' />
                <input ref='url' placeholder='Enter a url' />
                <button onClick={this.handleClick} style={{width: '100%'}}>Submit</button>
            </div>

        )
    }
}
export default NewRadio;