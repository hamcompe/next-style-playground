import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  input {
    display: none;
    &:checked ~  {
      .bio-accordion-content {
        transform: scaleY(1);
        max-height: initial;
      }
    }
  }
  .bio-accordion-content {
    max-height: 0;
    overflow: hidden;
    transform-origin: top;
    transform: scaleY(0);
    transition: max-height 0.05s 0.2s ease-in-out, transform 0.2s ease-in-out;
    padding-left: 18px;
  }
  label {
    position: relative;
    padding-left: 18px;

    &:before {
      content: '';
      border: 2px solid #999;
      border-right-width: 0px;
      border-top-width: 0px;
      border-color: #999;
      height: 8px;
      width: 8px;
      position: absolute;
      left: 0px;
      top: 50%;
      will-change: transform;
      transition: transform 0.2s ease;
      transform-origin: top center;
      transform: rotate(-135deg) translate(0, calc(-50% - 2px));
      pointer-events: none;
    }
  }
  input:checked {
    ~ label:before {
      transform: rotate(-45deg) translate(2px, calc(-50% - 0px));
    }
  }
`

function Page() {
  return (
    <div>
      <Component
        id={1}
        label="accordion"
        contents={['item1', 'item2', 'item3']}
      />
    </div>
  )
}

function Component({ id, label, contents = [] }) {
  return (
    <Wrapper>
      <div className="bio-accordion">
        <input id={id} type="checkbox" />
        <label htmlFor={id}>
          <strong>{label}</strong>
        </label>
        <div className="bio-accordion-content">
          {contents.map((content, idx) => <div key={idx}>{content}</div>)}
        </div>
      </div>
    </Wrapper>
  )
}
Component.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired
}

export default Page
