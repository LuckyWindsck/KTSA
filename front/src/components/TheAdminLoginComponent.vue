<template lang="pug">
  div.admin-login
    form.login-form(action="" method="" @submit.prevent="signIn")
      div.login-header
        h1.login-title Sign in to KTSA Dashboard
      div.login-body
        label.login-label(for="username") Username
        input.login-input(type="text" id="username" v-model="username")
        label.login-label(for="password") Password
        input.login-input(type="password" id="password" v-model="password")
        input.login-submit(type="submit" value="Sign in")
</template>

<style scoped>
.admin-login {
  height: 100vh;
  background-color: #f9f9f9;

  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
.login-form {
  border-top: 1px solid #d8dee2;
  border-radius: 5px;
  width: 50vw;
  margin: 0 auto;
}
.login-header {
  color: #333;
  text-align: center;
}
.login-title {
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: -0.5px;
}
.login-body {
  border-radius: 5px;
  padding: 20px;
  font-size: 1em;
  background-color: #fff;
  border: 1px solid #d8dee2;
}
.login-label {
  display: block;
  margin-bottom: 0.5em;
}
.login-input {
  display: block;
  width: calc(100% - 2em);

  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.25em;
  margin-bottom: 1em;

  vertical-align: middle;

  outline: none;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);

  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
}
.login-submit {
  display: block;
  width: 100%;

  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.25em;

  cursor: pointer;
  user-select: none;

  vertical-align: middle;

  outline: none;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;

  color: #fff;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
}
</style>

<script>
export default {
  data() {
    return {
      _username: "admin",
      _password: "pass",
      username: "admin",
      password: "pass"
    };
  },
  methods: {
    signIn() {
      const validUsername = this.username === this.$data._username;
      const validPassword = this.password === this.$data._password;
      if (!validUsername) console.log("Invalid username");
      if (!validPassword) console.log("Invalid password");
      if (!validUsername || !validPassword) return;
      this.$store.commit("login");
      this.$router.push("dashboard");
    }
  }
};
</script>

