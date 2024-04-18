import React from 'react'

type Props = {
    text:string
}

const Test = (props: Props) => {
  return (
    <div>Test {props.text}</div>
  )
}

export default Test