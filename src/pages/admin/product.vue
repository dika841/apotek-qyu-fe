<script setup>
import Sidebar from "../../components/sidebar.vue";
import { supabase } from "../../supabase";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";
import { ref, onBeforeMount } from "vue";
const product = ref({});
const isLoading = ref(false);
const getUsers = async () => {
  try {
    isLoading.value = true
    const { data } = await supabase.from("obat").select("*");
    product.value = data;
    isLoading.value = false
  } catch (err) {
    isLoading.value = false;
  }
};
onBeforeMount(() => {
  getUsers();
});

const landing = ref();
const about = ref();
const goTo = () => {
  console.log(landing.value.textContent);
};
</script>
<template>
  <div class="flex bg-gray-100">
    <Sidebar />
    <div class="h-25 w-full bg-white">
      <div class="flex justify-between">
      <h1 class="my-8 mx-5 text-[32px]">Daftar Obat</h1>
    <hr>
      <button class="mx-8 mr-10 mt-4 flex justify-end  max-w-xs h-14 mx-auto bg-indigo-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Tambah Obat</button>
    </div>
    <div class="w-full h-screen text-white">
      <div class="flex items-center justify-center p-20">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-lg text-left">
            <thead class="uppercase bg-blue-300">
              <th scope="col" class="px-6 py-3">NO.</th>
              <th scope="col" class="px-6 py-3">nama</th>
              <th scope="col" class="px-6 py-3">harga</th>
              <th scope="col" class="px-6 py-3">deskripsi</th>
              <th scope="col" class="px-6 py-3">aksi</th>
            </thead>
            <tbody
               v-if="!isLoading"
              class="text-black bg-white"
              v-for="(obat, index) in product"
              :key="obat.id"
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4 uppercase">{{ obat.nama_obat }}</td>
                <td class="px-6 py-4 uppercase">{{ obat.harga }}</td>
                <td class="px-6 py-4 uppercase">{{ obat.deskripsi }}</td>
                <td class="px-6 py-4 mr-5">
                  <div class="flex gap-4">
                  <img  width="20" :src="Edit" alt="" />
                  <img @click="deleteUsers(user.id)" width="20" :src="Delete" alt="" />
                </div>
                </td>
              </tr>
            </tbody>
             <tbody
               v-else
              class="text-black bg-white"
              
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4 text-center">Sedang Memuat Data....</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>
