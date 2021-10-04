<template>
  <div class="buttons" v-if="!user">
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
    <a class="button is-light" @click="login"> Log in </a>
  </div>
  <div v-else>
      Hello {{name}} {{user.LastName}}


  </div>
</template>

<script>

import Session, { Login } from "../services/session";

export default {

    data: ()=>({

        user: Session.user
    }),
    methods: {
        login(){
            Login();
        }
    },
    computed:{
        name(){
            return this.user.FirstName + ' ' + this.user.LastName;
        }
    }

}
</script>

<style>
</style>