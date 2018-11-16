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
  constructor(props) {
    super(props)
    this.state = {
      inputFocused: false,
      inputValue: '',
      query: '',
    }

    this.inputRef = React.createRef()
    this.handleSearch = this.handleSearch.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === 'Escape' && this.state.inputFocused)
      this.inputRef.current.blur()

    if (e.key === '/') {
      e.preventDefault()
      this.inputRef.current.focus()
      this.setState({ inputFocused: true })
    }
  }

  handleInputBlur(e) {
    this.setState({ inputFocused: false })
  }

  handleInputFocus(e) {
    this.setState({ inputFocused: true })
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleSearch(e) {
    e.preventDefault()
    this.setState(state =>
      ({ query: state.inputValue, inputValue: '' })
    )
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress)
  }

  render() {
    return (
      <SearchBarForm onSubmit={this.handleSearch}>
        <label>
          <input
            ref={this.inputRef}
            placeholder='Search...'
            value={this.state.inputValue}
            onBlur={this.handleInputBlur}
            onFocus={this.handleInputFocus}
            onChange={this.handleInputChange}
          />
        </label>
      </SearchBarForm>
    )
  }
}

export default SearchBar