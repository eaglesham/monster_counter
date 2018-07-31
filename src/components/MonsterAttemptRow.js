import Body from 'react-icons/lib/io/man'
import Hand from 'react-icons/lib/io/android-hand'
import Pulse from 'react-icons/lib/io/ios-pulse-strong'
import Flask from 'react-icons/lib/io/erlenmeyer-flask'
import { PropTypes } from 'react'

export const MonsterAttemptRow = ({voltage, date, humanBrain, attackedCreator}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {voltage}
        </td>
        <td>
            {(humanBrain) ? <Body /> : null}
        </td>
        <td>
            {(attackedCreator) ? <Hand /> : null}
        </td>
    </tr>
)

MonsterAttemptRow.PropTypes = {
    voltage: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    humanBrain: PropTypes.bool,
    attackedCreator: PropTypes.bool
}