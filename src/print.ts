import { join } from 'lodash-es';

console.log(
    'The print.js module has loaded! See the network tab in dev tools...'
);

export default () => {
    const value = join(['Button', 'Clicked', "Here's", '"some text"!'], ' ');
    console.log(value);
};
