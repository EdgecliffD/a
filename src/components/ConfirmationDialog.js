import React from 'react'
import {confirmable} from 'react-confirm'

const ConfirmationDialog = confirmable(props => {
  console.log(props)
  return (
    <div className={`modal ${props.show ? 'is-active' : null}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <div className="p">Are you sure you want to delete that?</div>
          <div className="control is-grouped">
            <p className="control">
              <a
                className="button is-primary"
                onClick={() => props.cancel('cancelled')}
              >
                NO!
              </a>
            </p>
            <p className="control">
              <a className="button is-danger" onClick={() => props.proceed()}>
                DELETE IT!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-close" />
    </div>
  )
})

export default ConfirmationDialog
