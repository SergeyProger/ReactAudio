import React from 'react';
import Radio from '../Radio';

export default class RadioList extends React.Component{

         state = {
            playRadioId: null,
             volStat: null
        };

    render() {
        const radioElements = this.props.data.map((radio) =>
          <div key={radio.id}> <li className="list-group-item">
                <Radio radio = {radio}
                       onButtonClick = { this.goPlay.bind(this, radio.id) }
                       isPlay ={  this.state.playRadioId === radio.id }
                       clickWolume = { this.wolume.bind(this, radio.id) }
                       volStat = { this.state.volStat === radio.id }
                />
          </li></div>
        );

        return ( <ul className="list-group"> {radioElements} </ul> );
    }

    imitState =(radioId)=>{
        let lzeState =  this.state.playRadioId === radioId ? null : radioId;
        return lzeState;
    }

    imitStateVolume = radioId => {
        let lzeState =  this.state.volStat=== radioId ? null : radioId
        return lzeState;
    }

    plaerReturn = () => {
        let a = document.querySelectorAll('.plaer');
         return a;
    }

    goPlay = radioId => {
        this.setState({playRadioId: this.state.playRadioId === radioId ? null : radioId});
        let imit = this.imitState(radioId);
        let all = this.plaerReturn();
        for(let i = 0; i < all.length; i++){
            if (all[i].id == imit){
                all[i].load();
                setTimeout(function() {all[i].play();}, 0);
            }else {
                all[i].pause();
            }
        }
     }

    wolume = radioId => {
        this.setState({volStat: this.state.volStat=== radioId ? null : radioId});
        let pon = this.plaerReturn();
        let imit = this.imitStateVolume(radioId);
        for(let i = 0; i < pon.length; i++) {
            if (pon[i].id == imit) {
                console.log(` if pon = ${pon[i].id} this.rid = ${radioId}`);
                pon[i].volume = 0.0;
            } else {
                console.log(` else pon = ${pon[i].id} this.rid = ${radioId}`);
                pon[i].volume = 1.0;
            }
        }
    }



}