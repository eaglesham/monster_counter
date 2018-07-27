import { PropTypes, Component } from 'react'

export class AddMonsterForm extends Component {
    render() {
        const { voltage, date, humanBrain, attackedCreator } = this.props
        return (
            <form className="add-monster-form">
                <label htmlFor="voltage">Voltage</label>
                <input id="voltage" type="text" required defaultValue={voltage} />
                
                <label htmlFor="date">Date</label>
                <input id="date" type="date" required defaultValue={date} />
                
                <div>
                    <label htmlFor="humanBrain">Human Brain</label>
                    <input id="humanBrain" type="checkbox" defaultChecked={humanBrain} />
                </div>
                <div>                    
                    <label htmlFor="attackedCreator">Attacked Creator</label>
                    <input id="attackedCreator" type="checkbox" defaultChecked={attackedCreator}/>
                </div>
            </form>
        )
    }
}
AddMonsterForm.defaultProps = {
    voltage: "800v",
    date: "2017-02-12",
    humanBrain: false,
    attackedCreator: false
}
AddMonsterForm.PropTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    humanBrain: PropTypes.bool.isRequired,
    attackedCreator: PropTypes.bool.isRequired
}