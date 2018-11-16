import React, { Component } from 'react'
import styled from 'styled-components'

const SearchBarForm = styled.form`
  min-width: 300px;
  background-color: #24292e;
  color: hsla(0,0%,100%,.75);
  padding: 12px;
  margin: 0;
  input:focus {
    background: white;
    color: #24292e;
  }
  label {
    font-weight: 400;
    max-width: 100%;
    padding: 0;
    vertical-align: middle;
    width: 100%; 
    border: 0;
    box-shadow: none;
    color: #fff;
    min-height: 30px;
  }
  input {
    min-height: 30px;
    border: 0;
    border-radius: 3px;
    background-color: hsla(0,0%,100%,.125);
    color: white;
    font-size: 13px;
    width: 100%;
    padding-left: 8px;
  }

  @media all and (max-width: 600px) {
    display: none;
  }
`

class SearchBar extends Component {
  render() {
    return (
      <SearchBarForm>
        <label>
          <input placeholder='Search...' />
        </label>
      </SearchBarForm>
    )
  }
}

export default SearchBar