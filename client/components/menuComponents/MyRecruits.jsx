import React, {Component} from 'react'
import {connect} from 'react-redux'

import RecruitFrame from './RecruitFrame'

class MyRecruits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
    this.selectRecruit = this.selectRecruit.bind(this)
    this.back = this.back.bind(this)
  }
  back() {
    this.setState({selected: null})
  }
  selectRecruit(selected) {
    this.setState({selected})
  }
  renderContent() {
    const {recruits} = this.props

    return <div className="columns is-multiline">
      {recruits.map(recruit =>
        <table className="column is-4 table has-text-centered is-full-width">
          <RecruitFrame
            selectRecruit={this.selectRecruit}
            addRecruit={null}
            inParty={false}
            key={`recruit-${recruit.id}`}
            recruit={recruit}
          />
        </table>
      )}
    </div>
  }
  render() {
    const {selected} = this.state
    const {close, recruits} = this.props
    return selected
      ? <RecruitFrame showMore={true} recruit={selected} back={this.back} />
      : <div className={`Modal modal is-active`} >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">My Recruits ({recruits.length})</p>
          <button onClick={close} className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          {this.renderContent()}
        </section>
        <footer className="modal-card-foot">
          <button onClick={close} className="button is-large is-info is-outlined is-fullwidth">Back</button>
        </footer>
      </div>
    </div>
  }
}

const mapStateToProps = ({recruits}) => {
  return {
    recruits
  }
}

export default connect(mapStateToProps)(MyRecruits)
