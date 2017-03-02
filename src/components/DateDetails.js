import React from 'react'
import DetentionTable from './DetentionTable'
import * as api from '../api'
import Header from './Header'

class DetentionDetails extends React.Component {
  constructor() {
    super()
    this.state = {detentions: {}}
  }
  componentDidMount() {
    this.fetchDetentions()
  }
  deleteDetention = (id) => {
    api.deleteDetention(id).then(
      this.fetchDetentions()
    )
  }
  setAttendance = (id) => {
    api.setAttendance(id).then(
      this.fetchDetentions()
    )
  }
  fetchDetentions = () => {
    const date = this.props.params.date
    api.fetchDetentions({startAt:date, endAt:date}).then(data =>
      this.setState({detentions: data})
    )
  }
  render(){
    return (
      <div>
        <Header title={"Details for " + this.props.params.date }/>
        <div className="container">
          <DetentionTable 
            deleteDetention={this.deleteDetention}
            setAttendance={this.setAttendance}
            detentions={Object.values(this.state.detentions)}
          />
        </div>
      </div>
    )
  }
}

export default DetentionDetails