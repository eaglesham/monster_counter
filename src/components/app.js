import { Component } from 'react'
import { MonsterAttemptList } from './MonsterAttemptList'
import { MonsterCounter } from './MonsterCounter'
import { AddMonsterForm } from './AddMonsterForm'
import { Menu } from './Menu'

export class App extends Component {
    constructor(props) {
        super(props)
        // inital state here
        this.state = {
            allMonsters: [
                {
                    voltage: "200k v",
                    date: "2016-01-02",
                    humanbrain: true,
                    attackedcreator: false
                }
            ]
        }
        this.addMonster = this.addMonster.bind(this)
    }
    addMonster(newMonster) {
        this.setState({
            allMonsters: [
                ...this.state.allMonsters,
                newMonster
            ]
        })
    }
    countMonsters(filter) {
      const { allMonsters } = this.state 
      
      return allMonsters.filter(
          monster => (filter ? monster[filter] : monster)).length 
    }

    render() {
        return (
            <div className="app">
            <Menu />
            {(this.props.location.pathname === "/") ? 
                <MonsterCounter total={this.countMonsters()} 
                humanBrain={this.countMonsters("humanBrain")} 
                attackedCreator={this.countMonsters("attackedCreator")} /> : 
            (this.props.location.pathname === "/add-monster") ? 
                <AddMonsterForm onNewMonster={this.addMonster} /> :
                <MonsterAttemptList monsters={this.state.allMonsters} filter={this.props.params.filter}/>
            }                
            </div>
        )
    }
}