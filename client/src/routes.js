import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

const routes = {

  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, cb) => {
        if (Auth.isUserAuthenticated()) {
          cb(null, DashboardPage);
        } else {
          cb(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: 'logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        replace('/');
      }
    }

  ]
};

export default routes;
