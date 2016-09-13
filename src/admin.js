import './styles/base.css';
import './styles/admin.css';

let rootEl = document.getElementById('root');

document.ontouchmove = function(event){
    event.preventDefault();
};