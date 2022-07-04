<script setup>
import Protect from "../../assets/illustration/protect.png";
import Swal from "sweetalert2";
const save = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Berhasil Diubah",
    showConfirmButton: false,
    timer: 1500,
  });
};
</script>

<template>
  <div class="my-8 justify-between flex gap-4 ml-20">
    <router-link to="/customer/:id">
      <div class="flex gap-x-2 items-center pr-19">
        <img width="60" :src="Protect" alt="" />
        <span class="text-1xl font-bold text-black-800">ApoteQyu</span>
      </div>
    </router-link>
  </div>
  <div class="mt-10 sm:mt-0 pt-10 ml-10 mr-40">
    <div class="md:grid md:grid-cols-3 md:gap-4 pl-10">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Informasi Pribadi
          </h3>
        </div>
        <ul class="space-y-2 mt-10">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
              <router-link to="/profile">
                <span class="ml-3">Profile</span>
              </router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                />
              </svg>
              <router-link to="#">
                <span class="flex-1 ml-3 whitespace-nowrap">Pesanan saya</span>
              </router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <router-link to="#">
                <span class="flex-1 ml-3 whitespace-nowrap">Ubah Password</span>
              </router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <router-link to="/">
                <span class="flex-1 ml-3 whitespace-nowrap">Keluar</span>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
      <div
        class="flex w-200 h-20 mb-12 overflow-hidden sticky top-0 bg-white border-2 border-radius-2"
      >
        <a
          class="cursor-pointer pt-5 pb-5 font-16 text-center overflow-hidden flex basis-0% grow-1 shrink-1 justify-center leading-4 select-none"
          href="#"
        >
          <span>Semua</span>
        </a>
        <a
          class="cursor-pointer pt-5 pb-5 ml-10 font-16 text-center overflow-hidden flex basis-0% grow-1 shrink-1 justify-center leading-4 select-none"
          href="#"
        >
          <span>Belum bayar</span>
        </a>
        <a
          class="cursor-pointer pt-5 pb-5 ml-10 font-16 text-center overflow-hidden flex basis-0% grow-1 shrink-1 justify-center leading-4 select-none"
          href="#"
        >
          <span>Disiapkan</span>
        </a>
        <a
          class="cursor-pointer pt-5 pb-5 ml-10 font-16 text-center overflow-hidden flex basis-0% grow-1 shrink-1 justify-center leading-4 select-none"
          href="#"
        >
          <span>Dikirim</span>
        </a>
        <a
          class="cursor-pointer pt-5 pb-5 ml-10 font-16 text-center overflow-hidden flex basis-0% grow-1 shrink-1 justify-center leading-4 select-none"
          href="#"
        >
          <span>Selesai</span>
        </a>
      </div>
    </div>
  </div>
</template>
