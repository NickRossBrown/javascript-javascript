import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './game.js';

$(document).ready(function() {
  $("gameForm").submit(function(event) {
    event.preventDefault();
    
  });
});
