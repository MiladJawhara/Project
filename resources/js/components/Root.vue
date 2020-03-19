<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="title"
          placeholder="Type a title"
        />
        <span class="text-small alert-danger" v-text="getError('title')"></span>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="description"
          placeholder="Type a description"
        />
      </div>

      <div class="form-group">
        <button @click.prevent="onSubmit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Errors from "../classes/Errors";
export default {
  data() {
    return {
      title: "",
      description: "",
      errors: new Errors()
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/info", this.$data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          this.errors = err.response.data;
        });
    },
    getError(field) {
      return this.errors.get(field);
    }
  }
};
</script>

<style scoped></style>
