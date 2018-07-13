import React from 'react'
import '../stylesheets/ui.scss'

//powder = humanBrain
//backwoods = attackedCreator

export const MonsterAttemptCount = React.createClass({
    render() {
        return (
            <div className="monster-attempt-count">
                <div className="total-frankensteins-made">
                    <span>5 Frankensteins</span>
                </div>
                <div className="humanBrain-frankensteins">
                    <span>2 Frankensteins</span>
                </div>
                <div className="insubordinate-frankensteins">
                    <span>1 insubordinate Frankenstein</span>
                </div>   
            </div>

        )
    }
})