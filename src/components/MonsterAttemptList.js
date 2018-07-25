import Body from 'react-icons/lib/io/man'
import Hand from 'react-icons/lib/io/android-hand'
import Pulse from 'react-icons/lib/io/ios-pulse-strong'
import Flask from 'react-icons/lib/io/erlenmeyer-flask'
import { MonsterAttemptRow } from './MonsterAttemptRow.js'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const MonsterAttemptList = ({monsters, filter}) => {
    // if there's no filter OR filter doesn't match 'humanbrain' or 'insuboridinate' return all monsters,
    // otherwise, send in filter of humanbrain or insubordinate and return monsters that match filter
    const filteredMonsters = (!filter || !filter.match(/humanbrain|attackedcreator/)) ?
          monsters : 
          monsters.filter(monster => monster[filter])

    return (
    <div className="monster-attempt-list">
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Voltage</th>
                    <th>Human Brain?</th>
                    <th>Attacked Creator?</th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-monsters">
                            All Frankensteins
                        </Link>
                        <Link to="/list-monsters/humanbrain">
                            Human Brain Frankensteins
                        </Link>
                        <Link to="/list-monsters/attackedcreator">
                            Insubordinate Frankensteins
                        </Link>
                    </td>
                </tr>
            </thead>
            <tbody>
                {filteredMonsters.map((monster, i) => 
                    <MonsterAttemptRow key={i} 
                                    {...monster} />
                )}
            </tbody>
        </table>
    </div>
)}

// custom proptypes check
MonsterAttemptList.PropTypes = {
    days: function(props) {
        if(!Array.isArray(props.days)) {
            return new Error(
                "Monster Attempt List should be an array"
            )
        } else if(!props.days.length) {
            return new Error(
                "Monster Attempt List must have at least 1 record"
            )
        } else {
            return null
        }
    }
}