<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Dashboard
      </a>
      <!-- Form -->
      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <a
        href="/"
        @click="logout"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
        Logout
      </a>
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import {logout} from "../services/auth.js"
export default {
  methods: {
    async logout (){
      const data = await logout();
      if (data == null){
        console.log('error')
      } else {
        this.$router.replace({ name: "login" });
      }
      
    }
  }
}
</script>
