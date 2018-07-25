import Body from 'react-icons/lib/io/man'
import Hand from 'react-icons/lib/io/android-hand'
import Pulse from 'react-icons/lib/io/ios-pulse-strong'
import Flask from 'react-icons/lib/io/erlenmeyer-flask'
import { MonsterAttemptRow } from './MonsterAttemptRow.js'

export const MonsterAttemptList = ({days}) => (

    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Voltage</th>
                <th>Human Brain?</th>
                <th>Attacked Creator?</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => 
                <MonsterAttemptRow key={i} 
                                   {...day} />
            )}
        </tbody>
    </table>
)