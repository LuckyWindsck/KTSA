<template>
  <div class="admin-dashboard">
    <form
      class="form-dashboard"
      action=""
      method=""
      @submit.prevent="createPost"
    >
      <div class="header-dashboard">
        <h1 class="title-dashboard">Dashboard</h1>
      </div>
      <div class="body-dashboard">
        <label class="label-dashboard" for="title">Title</label>
        <input class="text-input-dashboard" type="text" id="title" />
        <label class="label-dashboard" for="content">Content</label>
        <textarea class="textarea-dashboard" id="content" />
        <label class="label-dashboard" for="image">Image</label>
        <input
          class="file-input-dashboard"
          type="file"
          id="image"
          accept="image/*"
        />
        <button class="btn-submit-dashboard" type="submit">
          Create a post
        </button>
      </div>
    </form>
    <form class="form-dashboard" action="" method="" @submit.prevent="signOut">
      <div class="body-dashboard">
        <button class="btn-logout" type="submit">Log out</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signOut() {
      this.$store.commit('account/logout');
      this.$router.push('login');
    },
  },
  computed: {
    login() {
      return this.$store.state.account.login;
    },
  },
  mounted() {
    if (!this.login) {
      this.$router.push('login');
    }
  },
};
</script>

<style scoped>
.admin-dashboard {
  height: 100vh;

  background-color: #f9f9f9;

  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
}
.form-dashboard {
  width: 50vw;
  margin: 0 auto;

  border-top: 1px solid #d8dee2;
  border-radius: 5px;
}
.header-dashboard {
  text-align: center;

  color: #333;
}
.title-dashboard {
  letter-spacing: -0.5px;

  font-size: 1.5em;
  font-weight: 300;
}
.body-dashboard {
  padding: 20px;

  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;

  font-size: 1em;
}
.label-dashboard {
  display: block;

  margin-bottom: 0.5em;
}
.text-input-dashboard {
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
.textarea-dashboard {
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
.file-input-dashboard {
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
.btn-submit-dashboard {
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
.btn-submit-dashboard {
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
.btn-logout {
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
