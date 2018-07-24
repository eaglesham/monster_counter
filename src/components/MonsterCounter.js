import { Component } from 'react'
import '../stylesheets/ui.scss'

//powder = humanBrain
//backwoods = attackedCreator

export class MonsterAttemptCount extends Component {
    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }
    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    }
    
    render() {
        return (
            <div className="monster-attempt-count">
                <div className="total-frankensteins-made">
                    <span>{this.props.total}</span>
                    <span>Frankensteins made</span>
                </div>
                <div className="humanBrain-frankensteins">
                    <span>{this.props.humanBrain}</span>
                    <span>with human brains</span>
                </div>
                <div className="insubordinate-frankensteins">
                    <span>{this.props.attackedCreator}</span>
                    <span>insubordinate Frankensteins</span>
                </div>
                <div>
                    <span>
                        {this.calcGoalProgress(this.props.total, this.props.goal)}
                    </span>    
                </div>   
            </div>

        )
    }
}