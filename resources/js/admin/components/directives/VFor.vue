<template>
    <div>
      <div>
        <h1>v-for</h1>
        <hr/>
      </div>
  
      <div v-for="user in users" :key="user.id">
        <p>
          user id: {{user.id}}
        </p>
        <p>
          user name: {{user.name}}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VForm',
    data: () => ({
      users: [
        {
          id: '1',
          name: 'Oscar'
        },
        {
          id: '2',
          name: 'Eliud'
        },
        {
          id: '3',
          name: 'Imanol'
        }
      ]
    })
  }
  </script>
  