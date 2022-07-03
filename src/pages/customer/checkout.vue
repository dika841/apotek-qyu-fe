<script setup>
import Swal from "sweetalert2";
const sukses = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Pembelian Berhasil Pesanan diproses",
    showConfirmButton: false,
    timer: 1500,
  });
};
</script>

<template>
  <div class="container p-12 mx-auto">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
      <div class="flex flex-col md:w-full">
        <h2 class="mb-4 font-bold md:text-xl text-heading">
          Alamat Pengiriman
        </h2>
        <form class="justify-center w-full mx-auto" method="post" action>
          <div class="">
            <div class="space-x-0 lg:flex lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label
                  for="firstName"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Nama Depan</label
                >
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <label
                  for="firstName"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Nama Belakang</label
                >
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="w-full">
                <label
                  for="No.Handphone"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >No.Handphone</label
                >
                <input
                  name="Last Name"
                  type="text"
                  placeholder="+62 "
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="w-full">
                <label
                  for="Alamat"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Alamat</label
                >
                <textarea
                  class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Alamat"
                  cols="20"
                  rows="4"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div class="space-x-0 lg:flex lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label
                  for="city"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Kota</label
                >
                <input
                  name="Kota"
                  type="text"
                  placeholder="Kota"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <label
                  for="postcode"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Kode pos</label
                >
                <input
                  name="Kode pos"
                  type="text"
                  placeholder="Kode pos"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label class="flex items-center text-sm group text-heading">
                <input
                  type="checkbox"
                  class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                />
                <span class="ml-2"
                  >Simpan Informasi ini untuk sekarang</span
                ></label
              >
            </div>
            <div class="relative pt-3 xl:pt-6">
              <label
                for="catatan"
                class="block mb-3 text-sm font-semibold text-gray-500"
              >
                Catatan (Optional)</label
              ><textarea
                name="catatan"
                class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                rows="4"
                placeholder="Catatan untuk pengiriman"
              ></textarea>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                @click="sukses()"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Beli
              </button>
              <button
                @click="closeModal"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
        <div class="pt-12 md:pt-0 2xl:ps-4">
          <h2 class="text-xl font-bold">Detail Pesanan</h2>
          <div class="mt-8">
            <div class="flex flex-col space-y-4">
              <div class="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/user/erondu/1600x900"
                    alt="image"
                    class="w-60"
                  />
                </div>
                <div>
                  <h2 class="text-xl font-bold">Title</h2>
                  <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                  <span class="text-red-600">Harga</span> Rp.20000
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    alt="image"
                    class="w-60"
                  />
                </div>
                <div>
                  <h2 class="text-xl font-bold">Title</h2>
                  <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                  <span class="text-red-600">Harga</span> Rp.20000
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex p-4 mt-4">
            <h2 class="text-xl font-bold">ITEMS 2</h2>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
          >
            Subtotal<span class="ml-2">Rp.40.000</span>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
          >
            Ongkos Kirim<span class="ml-2">Rp.5000</span>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
          >
            Total<span class="ml-2">Rp.45.000</span>
          </div>
          <!--payment-->
          <div class="flex p-4 mt-4">
            <h2 class="text-xl font-bold">Pilih metode pembayaran</h2>
          </div>
          <div class="flex justify-center">
            <div class="form-check form-check-inline ml-6">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
                >Gopay</label
              >
            </div>
            <div class="form-check form-check-inline ml-6">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >Dana</label
              >
            </div>
            <div class="form-check form-check-inline ml-6">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >COD</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
