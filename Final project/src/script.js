import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
import {MDCTopAppBar} from '@material/top-app-bar';
// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import lineaPago from '../data/lineaPago';

import lineaDeDias from "./data/lineaDias";

    const createBoxDay =  lineaDeDias.map(function(){
        lineaDeDias.forEach(day => {
            document.createElement('div')
        });
        
    })
