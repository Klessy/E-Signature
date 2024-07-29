import React from 'react'

const Title = ({classes, title }) => {
  return <h1 className={!classes ? "title text-center" : classes}>{!title ? "Title" : title}</h1>
}

export default Title;