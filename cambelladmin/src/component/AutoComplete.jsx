import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MDBInput } from 'mdb-react-ui-kit';

const propTypes = {
  dataSource: PropTypes.array.isRequired
}

const AutoComplete = (props) => {
  const [lastVal, setLastVal] = useState('')

  useEffect(() => {
    if (!props.dataSource || !Array.isArray(props.dataSource)) {
      throw new Error('Autocomplete requires a dataSource[] prop')
    }
  }, [])

  const handleOnChange = (e) => {
    const val = e.target.value

    const eventType = props.dataSource.find(item => item === val) && lastVal.length < (val.length - 1) ? 'onSelect' : 'onSearch'
    props[eventType] && props[eventType](val)

    setLastVal(val)
  }

  return (
    <AutocompleteStyles>
    <MDBInput label='religion' name="mobile" type='text'
        autocomplete='off' 
        list="religionlist" 
        onChange={handleOnChange}  
      />

      <datalist id="religionlist" >
        {props.dataSource.map(item => <option key={item} value={item}/> )}
      </datalist>
    </AutocompleteStyles>
  )
}

AutoComplete.propTypes = propTypes

export default AutoComplete

const AutocompleteStyles = styled.div``
