<template>
    <div class="flex">
        <h1></h1>
        <div class="w-full">
            <div class="text-center">
                <h1 class="text-2xl font-bold">Welcome Back</h1>
                <p class="text-gray-600">
                    Today is a new day. It's your day. You shape it. Sign in to
                    start managing your projects.
                </p>
            </div>

            <form @submit.prevent="register" class="mt-6">
                <div class="mb-4">
                    <label class="block"><h1>Email*</h1></label>
                    <input
                        type="email"
                        v-model="email"
                        placeholder="Insert the email"
                        required
                        class="w-full px-4"
                    />
                </div>

                <div class="mb-4">
                    <label class="text-gray-700"><p>Password*</p> </label>
                    <input
                        type="password"
                        v-model="password"
                        placeholder="Insert the password"
                        required
                        class="w-full px-4 py-2"
                    />
                </div>

                <div class="chcek">
                   
                    <label for="remember" class="ml-2">Remember me</label>

                    <a href="#" class="ml-2">Forgot password?</a>
                </div>
                <br />
                <button type="submit" class="w-ful">Sign up</button>
                <br />
            </form>
        <div v-if="alertMessage" :class="alertClass" class="alert">
      {{ alertMessage }}
    </div>
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
      this.alertMessage = "Account sign up successfully!";
      this.alertClass = "alert-success";
    },
  },
};
</script>


<style scoped>


.flex {
    background-color: aliceblue;
    color: black;
    width: 400px;
    height: 450px;
    margin-left: 100px;
    padding: 20px;
    border-radius: 8px;
   text-align: center;
}
.flex .w-ful {
    width: 100%;
    margin-left: 0;
    background-color: #10df82;
    color: rgb(250, 250, 250);
    font-size: 16px;
    border: #10df82;
}
.flex .w-full-9 {
    width: 100%;
    margin-left: 0;
    background-color: #e8e8e8d5;
    color: rgba(0, 0, 0, 0.89);
    font-size: 16px;
    border: #e8e8e8d5;
}
.flex .w-fu {
    width: 100%;
    margin-left: 0;
    background-color: #e8e8e8d5;
    color: rgba(0, 0, 0, 0.89);
    font-size: 16px;
    border: #e8e8e8d5;
}

.flex .w-full .text-center h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
}

.flex .mt-6 .chcek {
    display: flex;
    justify-content: space-between;
}


/* Input field styling */
input {
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background-color: #f9f9f9;
    outline: none;
    transition: all 0.3s ease-in-out;
}

/* Input focus effect */
input:focus {
    border-color: #22c55e; /* Green focus border */
    box-shadow: 0 0 5px rgba(34, 197, 94, 0.4);
    background-color: #fff;
}

/* Placeholder styling */
input::placeholder {
    color: #a0a0a0;
    font-size: 14px;
}

/* Button styling */
/* button {
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
    margin-left: 80px;
    background-color: #1ee366;
} */
button .w-full-9 {
    width: 100%;
    margin-left: 0;
    background-color: #448aff;
    color: white;
    font-size: 16px;
}


button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #25e966;
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

 label p{
  margin-right: 300px;
  font-size: 14px;
  color: #000000;
  font-weight: 400;
}
label h1{
  margin-right: 310px;
  font-size: 16px;
  color: #000000;
  font-weight: 400;
}

</style>
