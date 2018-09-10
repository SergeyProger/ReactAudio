import React from 'react';
//import {nevol, vol, play, pause} from '../images';

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
        let message = isPlay ? 'stop' : 'play';
        let styleBtn = isPlay ? 'btn-outline-success' : 'btn-outline-danger';
         const play = isPlay ? true : false;
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
                    <span className="btn-group">
                    <div className="btn btn-dark" onClick={onButtonClick}>
                       <h2 className={styleBtn}>{message}</h2>
                    </div>
                        <div className="btn btn-dark" onClick={this.wolume.bind(this)}>
                            <h2 className="btn-outline-info">-</h2>
                         </div>
                    </span>
                </div>
            </div>

        );
    }


    wolume = () => {
        this.setState({volStat: !this.state.volStat});
        console.log(`volume state = ${this.state.volStat}`);
        if (this.state.volStat) {
            this.volume = 1.0;
        } else {
            this.volume = 0.0;
        }
    }

}
export default Radio;