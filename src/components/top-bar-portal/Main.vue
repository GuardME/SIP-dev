<template>
    <!-- BEGIN: Top Bar -->
    <div
      class="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] mt-12 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12"
    >
      <div class="h-full flex items-center">
        <!-- BEGIN: Logo -->
        <a href="" class="-intro-x hidden md:flex">
          <img
            alt="Icewall Tailwind HTML Admin Template"
            class="w-12"
            src="@/assets/logo/logo_psdkp.png"
          />
          <span class="text-white text-lg ml-3 mt-2"> Portal Sistem Informasi PSDKP </span>
        </a>
        <!-- END: Logo -->
        <!-- BEGIN: Breadcrumb -->
        <nav aria-label="breadcrumb" class="-intro-x h-full mr-auto">

        </nav>
        <!-- END: Breadcrumb -->
  

        <!-- BEGIN: Account Menu -->
        <router-link to="/login" class="btn btn-sm btn-dark w-24 mr-1 mb-2">
            Login
        </router-link>
        <!-- END: Account Menu -->
      </div>
    </div>
    <!-- END: Top Bar -->
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const searchDropdown = ref(false);
  const showSearchDropdown = () => {
    searchDropdown.value = true;
  };
  const hideSearchDropdown = () => {
    searchDropdown.value = false;
  };
  </script>
  