import { useState } from 'react'

export default function DarkMode () {
  const [darkMode, setDarkMode] = useState(false)
console.log(darkMode)
  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
<button onClick={()=>setDarkMode(true) }>dark mode</button>
<button onClick={()=>setDarkMode(false) }>light mode</button>

    </div>
  )
}
