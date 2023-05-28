<template>
  <div class="admin-dashboard">
    <the-news-form :headers="this.headers" />
    <div class="news-list">
      <the-dashboard-news
        v-for="(n, index) in this.news"
        :key="index"
        :news="n"
        class="dashboard-news"
      ></the-dashboard-news>
    </div>
    <form class="form-dashboard" action="" method="" @submit.prevent="logout">
      <div class="body-dashboard">
        <button class="btn-logout" type="submit">Log out</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      headers: undefined,
      news: undefined,
    };
  },
  methods: {
    logout() {
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
    this.token = sessionStorage.getItem('token');
    if (this.token === '') this.$router.push('login');

    this.headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    this.$axios
      .get('/api/news/', this.headers)
      .then((response) => {
        this.news = response.data;
        this.news.forEach((e) => console.log(e));
      })
      .catch((error) => console.log(error));

    if (!this.login) this.$router.push('login');
  },
};
</script>

<style scoped>
.news-list {
  margin: 2em;
}

.dashboard-news {
  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;

  width: 50vw;
  margin: 1em auto;
}

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

.body-dashboard {
  padding: 20px;

  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;

  font-size: 1em;
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
