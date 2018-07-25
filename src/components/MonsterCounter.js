import '../stylesheets/ui.scss'
import Body from 'react-icons/lib/io/man'
import Hand from 'react-icons/lib/io/android-hand'
import Pulse from 'react-icons/lib/io/ios-pulse-strong'
import Flask from 'react-icons/lib/io/erlenmeyer-flask'

//powder = humanBrain
//backwoods = attackedCreator
const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const MonsterAttemptCount = ({total=0, humanBrain=0, attackedCreator=0, goal=1}) => (
    <div className="monster-attempt-count">
        <div className="total-frankensteins-made">
            <span>{total}</span>
                <Flask />
            <span>Frankensteins made</span>
        </div>
        <div className="humanBrain-frankensteins">
            <span>{humanBrain}</span>
                <Body />
            <span>with human brains</span>
        </div>
        <div className="insubordinate-frankensteins">
            <span>{attackedCreator}</span>
                <Hand />
            <span>insubordinate Frankensteins</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(total, goal)}
            </span>    
        </div>   
    </div>
)