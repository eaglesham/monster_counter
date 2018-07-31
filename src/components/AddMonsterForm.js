import { PropTypes, Component } from 'react'

const voltageOptions = ["20,000v", "40,000v", "60,000v", "80,000v", "100,000v", "200,000v", "1,000,000v"]

class Autocomplete extends Component {
    get value() {
        return this.refs.inputVoltage.value
    }

    set value(inputValue) {
        this.refs.inputVoltage.value = inputValue
    }

    render() {
        return (
            <div>
                <input ref="inputVoltage" type="text" list="voltage-options" />
                <datalist id="voltage-options">
                    {this.props.options.map((opt, i) => 
                        <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}
export const AddMonsterForm = ({ voltage, date, humanBrain, attackedCreator, onNewMonster }) => {
    let _voltage, _date, _humanBrain, _attackedCreator
    
    const submit = (e) => {
        e.preventDefault()
        onNewMonster({
            voltage: _voltage.value,
            date: _date.value,
            humanBrain: _humanBrain.checked,
            attackedCreator: _attackedCreator.checked
        })
        _voltage.value = ""
        _date.value = ""
        _humanBrain.checked = false
        _attackedCreator.checked = false
    }

    return (
        <form onSubmit={submit} className="add-monster-form">
            <label htmlFor="voltage">Voltage</label>
            <Autocomplete options={voltageOptions} ref={input => _voltage = input} />
            
            <label htmlFor="date">Date</label>
            <input id="date" type="date" required defaultValue={date} ref={input => _date = input}/>
            
            <div>
                <label htmlFor="humanBrain">Human Brain</label>
                <input id="humanBrain" type="checkbox" defaultChecked={humanBrain} ref={input => _humanBrain = input} />
            </div>
            <div>                    
                <label htmlFor="attackedCreator">Attacked Creator</label>
                <input id="attackedCreator" type="checkbox" defaultChecked={attackedCreator} ref={input => _attackedCreator = input} />
            </div>
            <button>Add Monster</button>
        </form>
    )
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