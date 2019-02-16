import styled from "styled-components"

export const MapStyles = styled.div`
  position: relative;
  margin-top: 2.125rem;
  margin-bottom: 4.25rem;
  box-shadow: 0 0.3125rem 0.0625rem 0 rgba(0, 0, 0, 0.05),
    0 0 0 0.0625rem rgba(0, 0, 0, 0.03), 0 0.0625rem 0 0 rgba(0, 0, 0, 0.05),
    0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.01);

  div.childrenWrapper {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.1);

    div.googleMap {
      position: relative;
      /* width and height will be reset by Map props */
      width: 720px;
      height: 540px;
      max-width: 100%;
      min-width: 100%;
      margin: 0 auto;
    }

    h3 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      padding: 1rem 0 0.875rem;
      margin: 0;
      text-align: center;
      font-size: 1.5rem;
      font-family: Tra, serif;
      font-weight: 800;
      box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 940px) {
        /* Align map header to left so radio doesn't get in the way on smaller screens: */
        text-align: left;
        padding-left: 1.5rem;
      }
    }
  }

  div.map-buttons {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    h4 {
      font-size: 1.5rem;
      line-height: 0;
      margin: 0;
      padding: 0;
    }
    button {
      margin: 0 0 0 1.25rem;
      background: ${props => props.theme.primary};
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.625rem 1rem;
    }
    span {
      margin-left: 1rem;
      width: 8.5rem;
      text-align: center;
      font-weight: 500;
      line-height: 1.1;
    }
  }

  /* THEME TOGGLE: */
  .theme-select {
    position: absolute;
    top: 0%;
    right: 0%;
    margin-top: 0.25rem;
    margin-right: 0.5rem;
    font-family: Tra, serif;
    font-weight: 700;
    text-align: right;
    color: ${props => props.theme.primary};

    form {
      display: flex;
      justify-content: flex-end;
      max-width: 194px;
      width: 184px;
      flex-wrap: wrap;
      font-size: 0.925rem;
    }

    input {
    }
    label {
    }
  }
`
