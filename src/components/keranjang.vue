<script setup>
const props = defineProps({
    items:[]
})

const emits =  defineEmits(['close'])

const closeModal = () => {
    emits('close')
}


</script>

<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      
      <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
             <!-- Heroicon name: outline/exclamation -->
            
            <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div>
              <h3 class="my-4 text-lg leading-6 font-medium text-gray-900" id="modal-title">Keranjang</h3>
              <hr class="w-full">
              </div>
              <div v-for="(item, index) in items" :key="index" class="flex mt-2 justify-between w-full border-b-2 p-2 border-black-300">
              <div class="flex gap-x-4">

                  <img width="40" :src="item.gambar" alt="">
                  <div class="flex flex-col gap-y-2">
                      <span>
                          {{item.nama_obat}}
                      </span>
                      <span class="text-xs text-gray-400">
                      {{ item.stok + " Barang"}}
                    </span>
                  </div>
              </div>
              <span>{{item.harga}}</span>
               </div>
              
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="closeModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent text-black border-black shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>