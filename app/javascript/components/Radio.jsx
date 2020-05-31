import React from 'react';


class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.rname = props.radio.r_name;
    this.rurl = props.radio.r_url;
    this.rid = props.radio.id;
  }


  render() {

    const {isPlay, volStat, onButtonClick, clickWolume} = this.props;

    let pauseButonImage = isPlay ? {display: 'block'} : {display: 'none'};
    let playButonImage = isPlay ? {display: 'none'} : {display: 'block'};
    let volButonImage = volStat ? {display: 'block'} : {display: 'none'};
    let volumeButonImage = volStat ? {display: 'none'} : {display: 'block'};
    let styleBtn = isPlay ? 'btn-outline-success' : 'btn-outline-danger';

    return (
      <div className="card mx-auto">
        <div className="card-header">
          <h2 className={styleBtn}> Radio {this.rname}</h2>
        </div>
        <div className="card-body">
          <audio id={this.rid} key={this.rid} preload='none' className="plaer">
            <source src={this.rurl} type="audio/mp3"/>
            <source src={this.rurl} type="audio/ogg"/>
            <source src={this.rurl} type="audio/mpeg"/>
            <source src={this.rurl} type="audio/waw"/>
            Your browser does not support the <code>audio</code> element.
          </audio>
          <div className='btn-group'>
            <div>
              <img className="icon-play" style={playButonImage} src={`${require('../images/play.png')}`}
                   onClick={onButtonClick}/>
              <img className="icon-pause" style={pauseButonImage} src={`${require('../images/pause.jpeg')}`}
                   onClick={onButtonClick}/>
            </div>
            <div>
              <img className="icon-play" style={volumeButonImage} src={`${require('../images/vol.jpeg')}`}
                   onClick={clickWolume}/>
              <img className="icon-pause" style={volButonImage} src={`${require('../images/nevol.jpeg')}`}
                   onClick={clickWolume}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Radio;
