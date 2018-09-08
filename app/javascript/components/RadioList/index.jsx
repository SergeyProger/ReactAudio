import React from 'react';
import Radio from '../Radio';

export default class RadioList extends React.Component{

         state = {
            playRadioId: null
        }


    render() {

        const radioElements = this.props.data.map((radio) =>
          <div key={radio.id}> <li className="list-group-item" onClick={this.handleClick.bind(this, radio.id)}>
                <Radio name={radio.r_name} url={radio.r_url} id = {radio.id}/>
          </li></div>
        );

        return ( <ul className="list-group"> {radioElements} </ul> );
    }

    handleClick = radioId => {

        this.setState({playRadioId: this.state.playRadioId === radioId ? null : radioId});
        this.goPlay(radioId);
    }

     goPlay(radioId){

        let all = document.querySelectorAll('.plaer');

        for(let i = 0; i<all.length; i++){
            if (all[i].id !=radioId){
                 all[i].pause();
            }else {
                all[i].play();
            }
        }
     }



}