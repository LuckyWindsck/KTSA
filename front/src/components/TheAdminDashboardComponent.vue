<template lang="pug">
  div.admin-dashboard
    form.dashboard-form(action="" method="" @submit.prevent="signOut")
      div.dashboard-header
        h1.dashboard-title Dashboard
      div.dashboard-body
        input.dashboard-submit(type="submit" value="Sign out")
</template>

<style scoped>
.admin-dashboard {
  height: 100vh;
  background-color: #f9f9f9;

  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
.dashboard-form {
  border-top: 1px solid #d8dee2;
  border-radius: 5px;
  width: 50vw;
  margin: 0 auto;
}
.dashboard-header {
  color: #333;
  text-align: center;
}
.dashboard-title {
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: -0.5px;
}
.dashboard-body {
  border-radius: 5px;
  padding: 20px;
  font-size: 1em;
  background-color: #fff;
  border: 1px solid #d8dee2;
}
.dashboard-submit {
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
    return {};
  },
  methods: {
    signOut() {
      this.$store.commit("logout");
      this.$router.push("login");
    }
  },
  computed: {
    login() {
      return this.$store.state.login;
    }
  },
  mounted() {
    if (!this.login) {
      this.$router.push("login");
    }
  }
};
</script>
