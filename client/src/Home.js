import React, { useEffect, useState } from 'react'
import { Create } from './Create'
import axios from 'axios'

export const Home = () => {
  
  
  
  const [todos,setTodos]=useState([])


  useEffect(()=>{

    axios.get('http://localhost:3001/get')
    .then(result=>setTodos(result.data))
    .catch(err=>console.log(err))
  },[]);

     
  
      console.log(todos ,"hello ");

  
    return (
    <div className='home'>

        <h2>Todo List</h2>
        <Create/>

        {

            
            todos.map(todo=>{
              <div>

                {todo.task}
              </div>
            })


          }

            


         
    </div>
  )
}
