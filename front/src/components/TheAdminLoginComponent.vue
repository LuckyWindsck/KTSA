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

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: 'pass',
    };
  },
  methods: {
    signIn() {
      const validUsername = this.username === 'admin';
      const validPassword = this.password === 'pass';
      if (!validUsername) console.log('Invalid username');
      if (!validPassword) console.log('Invalid password');
      if (!validUsername || !validPassword) return;
      this.$store.commit('account/login');
      this.$router.push('dashboard');
    },
  },
};
</script>

<style scoped>
.admin-login {
  height: 100vh;

  background-color: #f9f9f9;

  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
.form-login {
  width: 50vw;
  margin: 0 auto;

  border-top: 1px solid #d8dee2;
  border-radius: 5px;
}
.header-login {
  text-align: center;

  color: #333;
}
.title-login {
  letter-spacing: -0.5px;

  font-size: 1.5em;
  font-weight: 300;
}
.body-login {
  padding: 20px;

  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;

  font-size: 1em;
}
.label-login {
  display: block;

  margin-bottom: 0.5em;
}
.text-input-login {
  display: block;

  width: calc(100% - 2em);
  margin-bottom: 1em;
  padding: 0.5em 1em;

  vertical-align: middle;

  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);

  font-size: 1em;
  font-weight: 600;
  line-height: 1.25em;
}
.password-input-login {
  display: block;

  width: calc(100% - 2em);
  margin-bottom: 1em;
  padding: 0.5em 1em;

  vertical-align: middle;

  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);

  font-size: 1em;
  font-weight: 600;
  line-height: 1.25em;
}
.btn-login {
  display: block;

  width: 100%;
  padding: 0.5em 1em;

  cursor: pointer;
  user-select: none;
  vertical-align: middle;

  color: #fff;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  outline: none;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);

  font-size: 1em;
  font-weight: 600;
  line-height: 1.25em;
}
</style>
