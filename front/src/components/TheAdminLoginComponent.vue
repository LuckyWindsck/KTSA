<template>
  <div class="admin-login">
    <form class="form-login" action="" method="" @submit.prevent="signIn">
      <div class="header-login">
        <h1 class="title-login">Log in to KTSA Dashboard</h1>
      </div>
      <div class="body-login">
        <label class="label-login" for="username">Username</label>
        <input
          class="text-input-login"
          type="text"
          id="username"
          v-model="username"
        />
        <label class="label-login" for="password">Password</label>
        <input
          class="password-input-login"
          type="password"
          id="password"
          v-model="password"
        />
        <button class="btn-login" type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.admin-login {
  height: 100vh;
  background-color: #f9f9f9;

  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
.form-login {
  border-top: 1px solid #d8dee2;
  border-radius: 5px;
  width: 50vw;
  margin: 0 auto;
}
.header-login {
  color: #333;
  text-align: center;
}
.title-login {
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: -0.5px;
}
.body-login {
  border-radius: 5px;
  padding: 20px;
  font-size: 1em;
  background-color: #fff;
  border: 1px solid #d8dee2;
}
.label-login {
  display: block;
  margin-bottom: 0.5em;
}
.text-input-login {
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
.password-input-login {
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
.btn-login {
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
      _username: 'admin',
      _password: 'pass',
      username: 'admin',
      password: 'pass',
    };
  },
  methods: {
    signIn() {
      const validUsername = this.username === this.$data._username;
      const validPassword = this.password === this.$data._password;
      if (!validUsername) console.log('Invalid username');
      if (!validPassword) console.log('Invalid password');
      if (!validUsername || !validPassword) return;
      this.$store.commit('login');
      this.$router.push('dashboard');
    },
  },
};
</script>
