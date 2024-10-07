const UserList = ()=>{
  const users = [
    {id: 1, name: "Pammi", age:23},
    {id: 2, name: "Sweta", age:25},
    {id: 3, name: "Saina", age:30} 
  ]
  
  return(
    <>
      <ul>
        {
          users.map((item)=>{
            return(
            <li>Hey, {item.name} and my age is {item.age}</li>
          )
          })
        }
      </ul>
    </>
  )
}

export default UserList