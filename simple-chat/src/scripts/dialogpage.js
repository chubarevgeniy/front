import './../styles/dialogpage.css';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./../img/', false, /\.(png|jpg|svg)$/));

const adddialog = document.querySelector('.bottom-button');

