import React from 'react'
import { render } from 'react-dom'
import { MonsterAttemptCount } from './components/MonsterCounter.js'

window.React = React

render(
	<MonsterAttemptCount total={50}
						 humanBrain={20}
						 attackedCreator={10}
						 goal={100} />,
	document.getElementById('react-container')
)