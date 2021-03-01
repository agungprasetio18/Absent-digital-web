<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-gray-200">
        <Navbar/>
        <Header/>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
    Header,
  },
};
</script>
