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
                    date: new Date("1/2/2016"),
                    humanBrain: true,
                    attackedCreator: false
                },
                {
                    voltage: "400k v",
                    date: new Date("2/12/2016"),
                    humanBrain: true,
                    attackedCreator: true
                },
                {
                    voltage: "800k v",
                    date: new Date("4/6/2016"),
                    humanBrain: false,
                    attackedCreator: true
                }
            ]
        }
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
                <AddMonsterForm /> :
                <MonsterAttemptList monsters={this.state.allMonsters} />
            }                
            </div>
        )
    }
}