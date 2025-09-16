import React, { useContext } from 'react'
import { Form } from 'react-router-dom'
import { GiftContext } from '../useContextExample/UseConextExample'


export const ContextExample1 = () => {
    const data = useContext(GiftContext)
    console.log(data)
  return (
    <div>ContextExample1
        this is {data.game} - {data.cricket} - {data.name}
    </div>
  )
}
