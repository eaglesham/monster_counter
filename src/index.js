import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/app'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory} >
		<Route path="/" component={App}/>
		<Route path="list-monsters" component={App}>
			<Route path=":filter" component={App}/>
		</Route>
		<Route path="add-monster" component={App} />
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
)