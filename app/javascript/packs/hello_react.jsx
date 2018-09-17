// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery/dist/jquery'
import RadioList from '../components/RadioList';
import AdminList from "../components/RadioList/adminList";

class Hello extends React.Component {

  constructor(props) {
      super(props);
      this.radios = [];
      this.state = {
          admin: false,
          radiosTry: true
      };
      this.componentDidMount();
  }

    componentDidMount() {
        try {
            this.radios = JSON.parse(document.querySelector('script[data]').getAttribute('data'));
        } catch(e) {
            console.log(e);  // тут можно обработать ошибку парсинга данных
        }
    }

    clickDelete = (id) => {
        $.ajax({
            url: '/radio/'+id,
            type: 'DELETE',
            success:() => {
                let vaer = this.radios.filter((radio) => {return radio.id != id});
                this.radios = vaer;
                this.setState({radiosTry:  !this.state.radiosTry});
            }
        });
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
                <div className="admin-column" style={menu}>
                    <AdminList data={this.radios} clickDelete={this.clickDelete} />
                </div>
                <div className ="radio-column">
                    <RadioList data={this.radios} />
                </div>

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


