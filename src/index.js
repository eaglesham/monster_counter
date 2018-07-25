import React from 'react'
import { render } from 'react-dom'
import { MonsterAttemptList } from './components/MonsterAttemptList.js'
import { MonsterAttemptCount } from './components/MonsterCounter'

window.React = React

render(
	<MonsterAttemptList days={
		[
			{
				voltage: "200k v",
				date: new Date("1/2/2016"),
				humanBrain: true,
				attackedCreator: false
			},
			{
				voltage: "400k v",
				date: new Date("2/12/2016"),
				humanBrain: true,
				attackedCreator: true
			},
			{
				voltage: "800k v",
				date: new Date("4/6/2016"),
				humanBrain: false,
				attackedCreator: true
			}
		]
	} />,
	document.getElementById('react-container')
)