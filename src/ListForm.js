import React, { Component } from 'react'
import { string, func } from 'prop-types'

class ListForm extends Component {
  static proptypes = {
  	value: string.isRequired,
    handleChange: func.isRequired,
    addItem: func.isRequired,
    inputIsEmpty: func.isRequired
  }
  
	render() {
      const { value, handleChange, addItem, inputIsEmpty } = this.props
      
    	return (
        	<form onSubmit={addItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={value}
                onChange={handleChange}
              />
              <button disabled={inputIsEmpty()}>Add</button>
            </form>
        )
    }
}

export default ListForm;