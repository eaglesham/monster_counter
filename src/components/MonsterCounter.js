import '../stylesheets/ui.scss'

//powder = humanBrain
//backwoods = attackedCreator
const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const MonsterAttemptCount = ({total, humanBrain, attackedCreator, goal}) => (
    <div className="monster-attempt-count">
        <div className="total-frankensteins-made">
            <span>{total}</span>
            <span>Frankensteins made</span>
        </div>
        <div className="humanBrain-frankensteins">
            <span>{humanBrain}</span>
            <span>with human brains</span>
        </div>
        <div className="insubordinate-frankensteins">
            <span>{attackedCreator}</span>
            <span>insubordinate Frankensteins</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(total, goal)}
            </span>    
        </div>   
    </div>
)