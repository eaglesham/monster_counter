import { Component } from 'react'
import { MonsterAttemptList } from './MonsterAttemptList'
import { MonsterCounter } from './MonsterCounter'

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
                <MonsterAttemptList monsters={this.state.allMonsters} />
                <MonsterCounter total={this.countMonsters()} 
                                humanBrain={this.countMonsters("humanBrain")} 
                                attackedCreator={this.countMonsters("attackedCreator")} />
            </div>
        )
    }
}