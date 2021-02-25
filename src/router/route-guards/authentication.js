export default function (to, from, next) {
    if (!localStorage.uid || !localStorage.userEmail) {
        if (localStorage.uid) localStorage.removeItem('uid')
        else if (localStorage.userEmail) localStorage.removeItem('userEmail')
    }


    if (to.path == '/login' || to.path == '/register') {
        if (localStorage.uid && localStorage.userEmail) next('/')

    } else if (to.path == '/add-event') {
        if (!localStorage.uid || !localStorage.userEmail) next('/login');
    }

    next();
}