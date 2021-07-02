<template>
  <div>
    <b-nav pills>
      <b-nav-item><NuxtLink to="/form">Form</NuxtLink></b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Dropdown"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Three</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
        <b-form-input aria-label="Input" class="mr-1"></b-form-input>
        <b-button type="submit">Ok</b-button>
      </b-nav-form>
    </b-nav>

    <div class="container">
      <form>
        <input v-model="name" type="text" />
        <input v-model="email" type="text" />
        <button @click="() => submit()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    async submit() {
      try {
        console.log(this);
        // const res = await this.$axios.request({
        //   url: "locahost:4000",
        //   method: "post",
        //   data: this.$data,
        // });

        console.log(res.status);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>