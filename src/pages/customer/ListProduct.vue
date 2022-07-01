<script setup>
import  keranjang from "../../assets/keranjang.svg"

</script>

<template>
<main class="mx-20 my-8">
  <div class="my-8 justify-between flex gap-4">
        <h1 class="w-1/4 font-bold">Apotek-qyu</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Kategori
</button>
        <input type="text" class=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search">
        <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
         <img width="60" height="380" :src="keranjang" alt="" />
      </span>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  User
</button>
      </div>
       <div class="grid grid-cols-4 gap-5">
      <div class="hover:scale-105 flex flex-col p-2 bg-white shadow-lg cursor-pointer rounded transform duration-300 ease-in-out">
          <div classs="flex justify-cente">
            <img class="mx-4" width="200" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//81/MTA-12426111/novell_novell-cooling-5-spray-cool-mint-obat-sariawan-dan-sakit-tenggorokan--15-ml-_full02.jpg"/>
          </div>
          <p class="font-semibold text-lg my-2 text-red-700 text-center">Rp.20.000</p>
          <p class="font-light text-sm text-center ">Obat Sakit Gigi Ponstan</p>
          <button class=" mt-auto block bg-yellow-300 px-2 text-gray-600 text-center text-sm rounded shadow-lg uppercase mt-6 hover:bg-green-400">Tambah Keranjang</button>
      </div>
       <div class="hover:scale-105 flex flex-col p-2 bg-white shadow-lg cursor-pointer rounded transform duration-300 ease-in-out">
          <div classs="flex justify-cente">
            <img class="mx-8" width="200" src="https://cf.shopee.co.id/file/27f01c1310e3a4b695a139a9e1e7f576"/>
          </div>
          <p class="font-semibold text-lg my-2 text-red-700 text-center">Rp.8.000</p>
          <p class="font-light text-sm text-center my-2 ">Obat Sakit Gigi Ponstan</p>
          <button class=" mt-auto block bg-yellow-300 px-2 text-gray-600 text-center text-sm rounded shadow-lg uppercase mt-6 hover:bg-green-400">Tambah keranjang</button>
      </div>
</div>
</main>
</template>