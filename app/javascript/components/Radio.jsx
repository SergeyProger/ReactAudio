import React from 'react';

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.rname = props.radio.r_name;
        this.rurl = props.radio.r_url;
        this.rid = props.radio.id;
        this.state = {
            volStat: true
        }
    }


    render() {

        const {isPlay, onButtonClick} = this.props;
        let pauseButonImage = isPlay ?  {display: 'block'} :  {display: 'none'};
        let playButonImage = isPlay ?  {display: 'none'} :  {display: 'block'};
        let volumeButonImage = this.state.volStat ?  {display: 'block'} :  {display: 'none'};
        let volButonImage = this.state.volStat ?  {display: 'none'} :  {display: 'block'};
        let styleBtn = isPlay ? 'btn-outline-success' : 'btn-outline-danger';

        return (
            <div className="card mx-auto">
                <div className="card-header">
                    <h2 className={styleBtn}> Radio {this.rname}</h2>
                    <p>{this.props.isPlay}</p>
                    <p>{this.all}</p>
                </div>
                <div className="card-body">
                    <audio  key={this.rid} className="plaer" id={this.rid}>
                        <source src={this.rurl} type="audio/ogg"/>
                        <source src={this.rurl} type="audio/mpeg"/>
                        <source src={this.rurl} type="audio/waw"/>
                        Ваш браузер не поддерживает <code>audio</code> элемент.
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
                         onClick={this.wolume}/>
                    <img className="icon-pause" style={volButonImage} src={`${require('../images/nevol.jpeg')}`}
                         onClick={this.wolume}/>
                    </div>
                    </div>
                </div>

            </div>
                );
    }


    wolume = () => {
        let pon = document.querySelectorAll('.plaer');
        this.setState({volStat: !this.state.volStat});

        if (!this.state.volStat) {
            pon[this.rid-1].volume = 1.0;
        } else {
            pon[this.rid-1].volume = 0.0;
        }
    }

}
export default Radio;