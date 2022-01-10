import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Profile } from './pages/Profile';
import { CreateSurvey } from './pages/CreateSurvey';
import { HistorySurvey } from './pages/HistorySurvey';
import { Survey } from './pages/Survey';
import { SignIn } from './pages/authentication/SignIn';
import { SignUp } from './pages/authentication/SignUp';
import { ResetPassword } from './pages/authentication/ResetPassword';
import { VerifyAccount } from './pages/authentication/VerifyAccount';

class App extends React.Component {
	public render () {
		return (
			<Router>
				<Switch>
					<Route exact path={'/'}>
						<Redirect to='/signIn'/*mainPage skipping login part*//>
					</Route>
					<Route exact path={'/signIn'}>
						<SignIn/>
					</Route>
					<Route exact path={'/signIn/:status'} render={(props) => (
    					<SignIn status={props.match.params.status}/>)} 
					/>
					<Route exact path={'/signUp'}>
						<SignUp/>
					</Route>
					<Route exact path={'/verifyAccount'}>
					<VerifyAccount/>
					</Route>
					<Route exact path={'/verifyAccount/:email'} render={(props) => (
    					<VerifyAccount email={props.match.params.email}/>)} 
					/>
					<Route exact path={'/resetPassword'}>
						<ResetPassword/>
					</Route>
					<Route exact path={'/mainPage'}>
						<MainPage/>
					</Route>
					<Route exact path={'/mainPage/:token'} render={(props) => (
    					<MainPage token={props.match.params.token}/>)} 
					/>
					<Route exact path={'/create/:token'} render={(props) => (
    					<CreateSurvey token={props.match.params.token}/>)} 
					/>
					<Route exact path={'/history/:token'} render={(props) => (
    					<HistorySurvey token={props.match.params.token}/>)} 
					/>
					<Route exact path={'/profile/:token'} render={(props) => (
    					<Profile token={props.match.params.token}/>)} 
					/>
					<Route exact path={'/survey/:type/:token'} render={(props) => (
    					<Survey 
							surveyType={props.match.params.type}
							token={props.match.params.token}
						/>
						)} 
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
