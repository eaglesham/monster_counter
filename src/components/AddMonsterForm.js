import { PropTypes, Component } from 'react'

export class AddMonsterForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        e.preventDefault()
        console.log('voltage', this.refs.voltage.value)
        console.log('date', this.refs.date.value)
        console.log('human brain', this.refs.humanBrain.checked)
        console.log('attacked creator', this.refs.attackedCreator.checked)
    }

    render() {
        const { voltage, date, humanBrain, attackedCreator } = this.props
        return (
            <form onSubmit={this.submit} className="add-monster-form">
                <label htmlFor="voltage">Voltage</label>
                <input id="voltage" type="text" required defaultValue={voltage} ref="voltage" />
                
                <label htmlFor="date">Date</label>
                <input id="date" type="date" required defaultValue={date} ref="date"/>
                
                <div>
                    <label htmlFor="humanBrain">Human Brain</label>
                    <input id="humanBrain" type="checkbox" defaultChecked={humanBrain} ref="humanBrain" />
                </div>
                <div>                    
                    <label htmlFor="attackedCreator">Attacked Creator</label>
                    <input id="attackedCreator" type="checkbox" defaultChecked={attackedCreator} ref="attackedCreator" />
                </div>
                <button>Add Monster</button>
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