import styled from "styled-components"

export const MapStyles = styled.div`
  div.childrenWrapper {
    position: relative;
    overflow: hidden;
    margin-top: 1.5rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0.3125rem 0.0625rem 0 rgba(0, 0, 0, 0.05),
      0 0 0 0.0625rem rgba(0, 0, 0, 0.03), 0 0.0625rem 0 0 rgba(0, 0, 0, 0.05),
      0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.01);

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
      padding: 1rem;
      margin: 0;
      text-align: center;
      font-size: 1.5rem;
      box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.1);
    }
  }
`
