<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <body>
      <div class="settings-page">
        <h1>Settings - Keybinds</h1>
        <form @submit.prevent="saveKeybinds">
          <div v-for="(action, index) in actions" :key="index" class="form-group">
            <label :for="action.name">{{ action.label }}</label>
            <input
              type="text"
              :id="action.name"
              v-model="keybinds[action.name]"
              @keydown.prevent="setKey($event, action.name)"
            />
          </div>
          <button type="submit">Save Keybinds</button>
        </form>
      </div>
    </body>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  
  const actions = [
    { name: 'moveUp', label: 'Move Up' },
    { name: 'moveDown', label: 'Move Down' },
    { name: 'moveLeft', label: 'Move Left' },
    { name: 'moveRight', label: 'Move Right' },
    { name: 'shoot', label: 'Shoot' },
    { name: 'settings', label: 'settings' },
    // Add more actions as needed
  ];
  
  const keybinds = reactive({
    moveUp: '',
    moveDown: '',
    moveLeft: '',
    moveRight: '',
    shoot: '',
    settings: '',
    // Add more default keybinds as needed
  });
  
  const setKey = (event, actionName) => {
    const validKeys = /^[a-zA-Z0-9]$/;
    if (validKeys.test(event.key)) {
      keybinds[actionName] = event.key;
    }
  };
  
  const saveKeybinds = async () => {
    localStorage.setItem('keybinds', JSON.stringify(keybinds));
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const endpoint = `${baseUrl}/saveKeybinds`;
    const response = await axios.post(endpoint, keybinds);
    alert(response.data);
    if(response.status === 200) {
        router.push('/game');
    }
  };
  </script>
  
  <style scoped>
  .settings-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  label {
    margin-right: 10px;
    width: 150px;
  }
  
  input[type="text"] {
    width: 150px; /* Adjust this value to make the text fields smaller */
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    font-size: 20px;
    display: flex;
    box-shadow: 0px 0px 20px rgb(243, 127, 147);
    border-radius: 12px;
    background-color: pink;
    padding: 15px 30px;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
  }
  
  body {
    display: flex;
    background-image: url(/assets/background/pink1.gif);
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  