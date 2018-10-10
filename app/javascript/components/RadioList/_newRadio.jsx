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
            success: (radio) => {
                this.props.handleSubmit(radio);
                $('.input').val('');
            }
        });
    }
    render() {
        return (
            <div className="list-group">
                Add radio.
                <input ref='name' className="input" placeholder='Enter the name of the radio' />
                <input ref='url' className="input" placeholder='Enter a url' />
                <button onClick={this.handleClick} style={{width: '100%'}}>Submit</button>
            </div>

        )
    }
}
export default NewRadio;