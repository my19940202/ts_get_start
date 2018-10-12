import {createBrowserHistory} from 'history';
let path = window.location.pathname;
export default createBrowserHistory({
    basename: `${path}/`
});
