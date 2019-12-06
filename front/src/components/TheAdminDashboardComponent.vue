<template lang="pug">
  div.admin-dashboard
    form.form-dashboard(action="" method="" @submit.prevent="createPost")
      div.header-dashboard
        h1.title-dashboard Dashboard
      div.body-dashboard
        label.label-dashboard(for="title") Title
        input.text-input-dashboard(type="text" id="title")
        label.label-dashboard(for="content") Content
        textarea.textarea-dashboard(id="content")
        label.label-dashboard(for="image") Image
        input.file-input-dashboard(type="file" id="image" accept="image/*")
        button.btn-submit-dashboard(type="submit") Create a post
    form.form-dashboard(action="" method="" @submit.prevent="signOut")
      div.body-dashboard
        button.btn-logout(type="submit") Log out
</template>

<style scoped>
.admin-dashboard {
  height: 100vh;
  background-color: #f9f9f9;

  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
.form-dashboard {
  border-top: 1px solid #d8dee2;
  border-radius: 5px;
  width: 50vw;
  margin: 0 auto;
}
.header-dashboard {
  color: #333;
  text-align: center;
}
.title-dashboard {
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: -0.5px;
}
.body-dashboard {
  border-radius: 5px;
  padding: 20px;
  font-size: 1em;
  background-color: #fff;
  border: 1px solid #d8dee2;
}
.label-dashboard {
  display: block;
  margin-bottom: 0.5em;
}
.text-input-dashboard {
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
.textarea-dashboard {
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
.file-input-dashboard {
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
.btn-submit-dashboard {
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
.btn-submit-dashboard {
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
.btn-logout {
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
