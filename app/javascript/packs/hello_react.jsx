// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import RadioList from '../components/RadioList';
import AdminList from "../components/RadioList/adminList";

class Hello extends React.Component {

    state = {
        admin: false
    }

    render() {
        let data = [];  // задаем значение по-умолчанию

        try {
            data = JSON.parse(document.querySelector('script[data]').getAttribute('data'));
        } catch(e) {
            console.log(e);  // тут можно обработать ошибку парсинга данных
        }
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
                    <AdminList data={data} />
                </div>
                <div className ="radio-column">
                    <RadioList data={data} />
                </div>

            </div>
        )
    }
    mainAdmin(){
        this.setState({admin: !this.state.admin});
        console.log('Нажата кнока меню.'+ this.state.admin);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Hello/>,
        document.body.appendChild(document.createElement('root')),
    )
})

export default Hello;


