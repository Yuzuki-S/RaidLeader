import React from 'react'

import {ManaIcon} from '../icons/StatIcons'
import { Line, Circle } from 'rc-progress';


export default function ({maxMana, mana}) {
  const percent = mana/maxMana * 100
  const colourClass = percent > 1/3*100 ? 'hsl(217, 71%, 53%)' : 'hsl(48, 100%, 67%)'
  return <div className="ManaBar has-text-centered box">
    <div className="" style={{height: '15px'}}>
      <p className="content"><ManaIcon value={`${Math.round(mana)}/${Math.round(maxMana)}`} /></p>
        <Line percent={percent} strokeWidth="10" strokeColor={colourClass} strokeLinecap="square"  trailWidth="10" />
    </div>
  </div>
}
