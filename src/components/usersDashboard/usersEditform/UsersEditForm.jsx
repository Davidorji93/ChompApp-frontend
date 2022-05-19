import React from 'react'
import './UsersEditForm.css'

const UsersEditForm = () => {
  return (
      <div className="users__edit__form__wrapper">
            <div class="users-form-wrapper">
         <div class="title">
            Edit your details
         </div>
         <form action="#">
            <div class="field">
               <input type="text" placeholder="email"/>
            </div>
            <div class="field">
               <input type="password"  placeholder="password"/>

            </div>

            <div class="field">
               <input type="password"  placeholder="password"/>

            </div>
            <div class="field">
               <input type="password"  placeholder="password"/>

            </div>
          
            <div class="field">
               <input type="submit" value="Login"/>
            </div>
        
         </form>
      </div>

     </div>

  )
}

export default UsersEditForm

