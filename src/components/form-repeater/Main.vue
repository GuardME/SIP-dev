<template>
          <label for="crud-form-01" class="form-label mt-3 font-medium">Wilayah Operasi</label>
                <div class="grid grid-cols-12 gap-2">
                    <TomSelect v-model="select" :options="{
                      placeholder: '--WPPNRI--'
                      }" class="w-full col-span-4">
                      <option value="1">--</option>
                      <option value="1">--</option>
                    
                    </TomSelect>
                     <TomSelect v-model="select" :options="{
                      placeholder: '--Laut/perairan--'
                      }" class="w-full col-span-4">
                      <option value="1">--</option>
                      <option value="1">--</option>
                    
                    </TomSelect>
                    <button class="btn btn-primary w-20" @click="deleteWilayahOperasi()">
                    <MinusCircleIcon/>
                    </button>
                </div>
</template>

<script setup>
   
   import { computed, ref } from "vue";

   const props = defineProps({
    wilayahoperasi: Object,
    index: Number,
   });

   
    const emit = defineEmits(["change", "addWilayahOperasi", "deleteWilayahOperasi"]);

    const model = ref(JSON.parse(JSON.stringify(props.wilayahoperasi)));

    function addWilayahOperasi() {
    emit("addWilayahOperasi", props.index + 1);
    }


  function deleteWilayahOperasi() {
  emit("deleteWilayahOperasi", props.wilayahoperasi);
}
</script>