import React from 'react';
import Radio from '../Radio';

export default class RadioList extends React.Component {

  state = {
    playRadioId: null,
    volStat: null,
  };



  render() {

    const radioElements = this.props.data.map((radio) =>
      <div key={radio.id} id={radio.id}>
        <li className="list-group-item">
          <div className="loader" id={'loader' + radio.id}></div>
          <Radio radio={radio}
                 onButtonClick={this.goPlay.bind(this, radio.id)}
                 isPlay={this.state.playRadioId === radio.id}
                 clickWolume={this.wolume.bind(this, radio.id)}
                 volStat={this.state.volStat === radio.id}
          />
        </li>
      </div>
    );

    return (<ul className="list-group"> {radioElements} </ul>);
  };

  imitState = radioId => {
    return this.state.playRadioId === radioId ? null : radioId;
  };

  imitStateVolume = radioId => {
    return this.state.volStat=== radioId ? null : radioId;
  };

  getPlaers = () => {
    return document.querySelectorAll('.plaer');
  };

  getLoader = radioId => {
    return document.getElementById('loader' + radioId);
  };

  playRadio = radio => {

  };

  goPlay = radioId => {
    let loader = this.getLoader(radioId);
    let imit =  this.imitState(radioId);
    let all = this.getPlaers();
    for(let i = 0; i < all.length; i++) {
      if(all[i].id == imit) {
        loader.style.display='inline-block';
        all[i].load();
        all[i].oncanplay = function() {
          setTimeout(function () {
            all[i].play();
            loader.style.display='none';
          }, 0);
        }
      } else {
        all[i].pause();
      }
    }
    this.setState({playRadioId: imit});
  };

  wolume = radioId => {
    let imit = this.imitStateVolume(radioId);
    let pon = this.getPlaers();
    for (let i = 0; i < pon.length; i++) {
      if (pon[i].id == imit){
        pon[i].volume = 0.0;
      } else {
        pon[i].volume = 1.0;
      }
    }
    this.setState({volStat: imit});
  }
}