<template>
  <div class="form-container">
    <h2>Hello</h2>
    <p>Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
    <form @submit.prevent="register">
      <div class="input-group">
        <h3>Email*</h3>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email" 
          required 
        />
      </div>
      <div class="input-group">
        <h3>Password*</h3>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password" 
          required 
        />
      </div>
      <div class="input-group">
        <h3>Confirm Password*</h3>
        <input 
          type="password" 
          v-model="confirmPassword" 
          placeholder="Confirm Password" 
          required 
        />
      </div>
      <button type="submit">create an account</button>
    </form>
    <div v-if="alertMessage" :class="alertClass" class="alert">
      {{ alertMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "ra@gmail.com",
      password: "111",
      confirmPassword: "111",
      alertMessage: "",
      alertClass: "",
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.alertMessage = "Passwords is wrong!";
        this.alertClass = "alert-error";
        return;
      }
      this.alertMessage = "Account created successfully!";
      this.alertClass = "alert-success";
    },
  },
};
</script>

<style scoped>
.form-container {
 
  width: 600px;
  height: 550px;
  max-width: 400px;
  color: #000000;
  margin-left: 150px;
  padding: 20px;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.form-container .input-group h3 {
 
  text-align: left;
} 
h2 {
  font-family: Arial, sans-serif;
  color: #000000;
  font-weight: 600;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 5px 0;
}

.input-group input:focus {
  border-color: #4CAF50;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #10df82;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.alert {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
}

.alert-error {
  background-color: #f44336;
  color: white;
}

.alert-success {
  background-color: #4CAF50;
  color: white;
}
</style>
