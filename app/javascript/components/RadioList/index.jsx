import React from 'react';
import Radio from '../Radio';

export default class RadioList extends React.Component{

         state = {
            playRadioId: null
        }

    render() {
        const radioElements = this.props.data.map((radio) =>
          <div key={radio.id}> <li className="list-group-item">
                <Radio radio = {radio}
                       isPlay={ this.state.playRadioId === radio.id }
                       onButtonClick={this.goPlay.bind(this, radio.id)}
                />
          </li></div>
        );

        return ( <ul className="list-group"> {radioElements} </ul> );
    }

    imitState =(radioId)=>{
        let lzeState =  this.state.playRadioId === radioId ? null : radioId;
        return lzeState;
    }

     goPlay = radioId => {
         this.setState({playRadioId: this.state.playRadioId === radioId ? null : radioId});
        let imit = this.imitState(radioId);
        let all = document.querySelectorAll('.plaer');
        for(let i = 0; i < all.length; i++){
            if (all[i].id == imit){
                all[i].load();
                setTimeout(function() {all[i].play();}, 0);
            }else {
                all[i].pause();
            }
        }
     }



}