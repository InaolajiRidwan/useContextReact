import React from 'react'
import { useContext } from 'react'
import {NameContext} from '../App'


export const Component3 = () => {
    const oruko = useContext(NameContext)
  return (
    <div>
        my name is {oruko}
    </div>
  )
}
