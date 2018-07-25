import { createClass } from 'react'

export const App = createClass({
    getInitialState() {
        return {
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
    },
    render() {
        return (
            <div className="app">
                {this.state.allMonsters[0]["voltage"]}
            </div>
        )
    }
})