import React from 'react'
// import Class from './component/Welcome'
// import TodoList from './component/TodoList'
import DataCompo from './component/DataCompo'

import withLoading from './component/Hoc'

function App() {

  const Enhanced = withLoading(DataCompo)

  return (
    <>
    {/* <TodoList></TodoList> */}
    <Enhanced data="HI. i ma ther data"></Enhanced>
    </>
  )
}

export default App
