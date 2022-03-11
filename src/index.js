import App from "./App.svelte";
import _ from 'lodash';
// importing my css
import styles from "./styles.css"
import img from "./todo-list-banner.jpeg"


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';


const app = new App({
  target: document.getElementById('root'),
  
});
console.log('index working')
export default app;
