import React from 'react';
import Radio from '../Radio';

export default class RadioList extends React.Component{
    state = {
        playRadioId: null
    }

    render() {
        const radioElements = this.props.data.map((radio) =>
          <div> <li key = {radio.id} className="list-group-item" onClick={this.handleClick.bind(this,radio.id)}>
                <Radio name={radio.r_name} url={radio.r_url} isPlay = {this.state.playRadioId === radio.id}/>
                {console.log(`state = ${this.state.playRadioId} radio id = ${radio.id} `)}
          </li></div>

        );

        return (
            <ul className="list-group"> {radioElements} </ul>

        );
    }

    handleClick = radioId => {
        this.setState({playRadioId: this.state.playRadioId === radioId ? null : radioId});
        let all = document.querySelectorAll('#plaer');
        if (!this.state.playRadioId) {
            console.log("querySelector if" + all[radioId - 1 ].pause());
        } else{
            console.log("querySelector else" + all[radioId - 1].play());
        }


    }

}