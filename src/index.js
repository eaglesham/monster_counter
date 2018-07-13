import React from 'react'
import { render } from 'react-dom'
import { MonsterAttemptCount } from './components/MonsterCounter.js'

window.React = React

render(
	<MonsterAttemptCount />,
	document.getElementById('react-container')
)