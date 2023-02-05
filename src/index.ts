import './style.css';
import Icon from './tunic.png';

async function getComponent() {
    const element = document.createElement('div');
    const { join } = await import('lodash-es');

    element.innerHTML = join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const button = document.createElement('button');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(button);
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;

        print();
    });

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
})