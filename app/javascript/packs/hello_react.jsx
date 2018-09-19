// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery/dist/jquery';
import RadioList from '../components/RadioList';
import AdminList from "../components/RadioList/adminList";
import NewRadio from '../components/RadioList/_newRadio'

class Hello extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          admin: false,
          radios: []
      };
      this.componentDidMount();
  }


    componentDidMount() {
        try {
         let rad =  JSON.parse(document.querySelector('script[data]').getAttribute('data'));
            this.setState({radios: rad});
        } catch(e) {
            console.log(e);
        }
    }

    removeRadioClient(id) {
        let newRadio = this.state.radios.filter((radio) => {
            return radio.id != id;
        });

        this.setState({radios: newRadio});
    }

    clickDelete = (id) => {
        $.ajax({
            url: '/radio/'+id,
            type: 'DELETE',
            success:() => {
                this.removeRadioClient(id);
            }
        });
    }

    handleSubmit = (radio) => {
        let newState = this.state.radios.concat(radio);
        this.setState({ radios: newState });
    }



    render() {

        let menu = this.state.admin ? {display: 'block'} : {display: 'none'}

        return(
            <div className="container">
                <div className = "jumbotron ">
                    <div className ="header">
                        <h1>Radio Show </h1>
                        <h2>This is the best radio compilation</h2>
                    </div>

                    <img className="icon-admin" src={`${require('../images/admin.png')}`}
                    onClick={this.mainAdmin.bind(this)}/>
                </div>

                <div className="new-radio" style={menu}><NewRadio handleSubmit={this.handleSubmit}/></div>
                <div className="admin-column" style={menu}><AdminList data={this.state.radios} clickDelete={this.clickDelete} /></div>
                <div className ="radio-column"><RadioList data={this.state.radios} /></div>
            </div>
        )
    }

    mainAdmin(){
        this.setState({admin: !this.state.admin});
    }
}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Hello/>,
        document.body.appendChild(document.createElement('root')),
    )
})

export default Hello;


