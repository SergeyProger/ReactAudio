// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import RadioList from '../components/RadioList';


class Hello extends React.Component {

    render() {
        let data = [];  // задаем значение по-умолчанию

        try {
            data = JSON.parse(document.querySelector('script[data]').getAttribute('data'));
        } catch(e) {
            console.log(e);  // тут можно обработать ошибку парсинга данных
        }
        return(
            <div className="container">
            <div className = "jumbotron">
                <h1 className ="centerText"> Radio </h1>
            </div>

            <div className = "centerDiv centerText">
               <RadioList data={data}/>
            </div>
            </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('root')),
  )
})

