<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label">Picture</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="Input a URL to a picture"
              v-model="post.picture"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Alt</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Some alternate text for this picture"
              v-model="post.alt"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Captions</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Some text to explain this picture"
              v-model="post.caption"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" v-model="post.isPublic" :value = "true" />
              Public
            </label>
            <label class="radio">
              <input type="radio" name="question" v-model="post.isPublic" :value = "false" />
              Private
            </label>
          </div>
        </div>

        <div class="card">
          <footer class="card-footer">
            <button class="is-link card-footer-item" type="submit">Submit</button>
            <button class="is-link is-light card-footer-item" type="reset">Cancel</button>
          
          </footer>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    newPost: Object
  },
  data(){
    return{
      post: this.newPost
    }
  },
  watch: {
    newPost(){
      this.post = this.newPost;
    }
  }
};
</script>

<style>
</style>