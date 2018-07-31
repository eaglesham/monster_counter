import { PropTypes, Component } from 'react'

export const AddMonsterForm = ({ voltage, date, humanBrain, attackedCreator }) => {
    let _voltage, _date, _humanBrain, _attackedCreator
    
    const submit = (e) => {
        e.preventDefault()
        console.log('voltage', _voltage.value)
        console.log('date', _date.value)
        console.log('human brain', _humanBrain.checked)
        console.log('attacked creator', _attackedCreator.checked)
    }

    return (
        <form onSubmit={submit} className="add-monster-form">
            <label htmlFor="voltage">Voltage</label>
            <input id="voltage" type="text" required defaultValue={voltage} ref={input => _voltage = input} />
            
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