import React from 'react';

class Radio extends React.Component {

    constructor(props){
       super(props);
       this.url = props.url;
       this.name = props.name;
    }

    render() {
        const asPlay = this.props.isPlay;
        console.log("render" + asPlay);
        return (
            <div className="card mx-auto">
                <div className="card-header">
                    <p> Radio {this.name} </p>

                </div>
                <div className="card-body">
                    <audio controls id = "plaer" onClick={this.handleClick()}>
                        <source src = {this.url} type="audio/ogg" />
                        <source src = {this.url} type="audio/mpeg" />
                        <source src = {this.url} type="audio/waw" />
                        Ваш браузер не поддерживает <code>audio</code> элемент.
                    </audio>
                </div>
            </div>
        );
    }

     handleClick=()=>{

     }
}
export default Radio;