import React from 'react'

const OpenLink = ({ linkToOpen }) => {
    const open = () => {
        window.open(linkToOpen)
    }

  return (
    <button onClick={OpenLink}></button>
  )
}

export default OpenLink
