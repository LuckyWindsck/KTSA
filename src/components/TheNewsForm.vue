<template>
  <form class="form-dashboard" action="" method="" @submit.prevent="createPost">
    <div class="header-dashboard">
      <h1 class="title-dashboard">Dashboard</h1>
    </div>
    <div class="body-dashboard">
      <label class="label-dashboard" for="title">Title</label>
      <input
        class="text-input-dashboard"
        type="text"
        id="title"
        v-model="title"
      />
      <label class="label-dashboard" for="content">Content</label>
      <textarea class="textarea-dashboard" id="content" v-model="content" />
      <button class="btn-submit-dashboard" type="submit">
        Create a post
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['headers'],
  data() {
    return {
      title: '',
      content: '',
      token: '',
    };
  },
  methods: {
    createPost() {
      const time = ((d) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`)(new Date());
      const payload = {
        author: 'Lin',
        title: this.title,
        image: '',
        content: this.content,
        created_at: time,
        updated_at: time,
      };

      this.$axios
        .post('/api/news/', payload, this.headers)
        .then((response) => {
          console.log(response.data);
          this.title = '';
          this.content = '';
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
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

  height: 25vh;
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
</style>
