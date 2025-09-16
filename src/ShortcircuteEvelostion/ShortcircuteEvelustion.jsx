import React, { useState } from 'react'

export const ShortcircuteEvelustion = () => {
// {&&}--> rendintlo okati false aina adi false avtundi
const [circute, setCircute] = useState(true)


  return (
    <div>
        <div>ShortcircuteEvelustion</div>
           <div>{circute && <div>this is true</div>}</div>
    </div>
  )
}
