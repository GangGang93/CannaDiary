import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Home from './Pages/Home/home';
import Journal from './Pages/Journal/journal';
import Messages from './Pages/Messages/messages';
import Profile from './Pages/Profile/profile';
import CyphBuddies from './Pages/CyphBuddies/cyphBuddies';
import StrainSearch from './Pages/StrainSearch/strainSearch';
import SignUp from './Pages/SignUp/signUp';
import Login from './Pages/Login/login';
import NoMatch from './Pages/NoMatch/noMatch';




const Routes = () => { 
    return (
        <Layout>
            <Switch>
                    <Route path="/" exact component={ Home }/>                                                                      
                    <Route path="/journal" exact component={ Journal }/>                                                                      
                    <Route path="/messages" exact component={ Messages }/>                                                                      
                    <Route path="/profile" exact component={ Profile }/>                                                                      
                    <Route path="/cyph-buddies" exact component={ CyphBuddies }/>                                                                      
                    <Route path="/strain-search" exact component={ StrainSearch }/>                                                                      
                    <Route path="/sign-up" exact component={ SignUp }/>                                                                      
                    <Route path="/login" exact component={ Login }/>                                                                      
                    <Route component={ NoMatch }/>                                                                      
            </Switch> 
        </Layout>
    );
};

export default Routes;