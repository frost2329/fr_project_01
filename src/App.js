import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {Routes} from "react-router";
import Header from "./components/Header/Header";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializationTC} from "./redux/app_reducer";
import Loading from "./components/common/Loading/Loading";
import {getInitialized} from "./redux/app_selectors";

const MessengerContainer = React.lazy(() => import('./components/Messenger/MessengerContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializationTC();
    }

    render() {
        if (!this.props.initialized) {
            return <Loading isLoading={true}/>
        }
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="app-wrapper">
                    <Header/>
                    <div className='main_page'>
                        <Navbar/>
                        <div className='main_content'>
                            <Routes>
                                <Route path='/profile/' element={<ProfileContainer/>}/>
                                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                                {/*<Route path="/dialogs/*" element={<MessengerContainer/>}/>*/}
                                <Route path="/dialogs/*"
                                       element={<React.Suspense fallback={<div>Загрузка...</div>}>
                                                    <MessengerContainer/>
                                                </React.Suspense>}/>
                                <Route path="/users/*" element={<UsersContainer/>}/>
                                <Route path="/login" element={<Login/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: getInitialized(state)
    }
}
let mapDispatchToProps = {
    initializationTC: initializationTC,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
