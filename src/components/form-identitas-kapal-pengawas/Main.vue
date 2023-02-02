<template>
    <div class=" box mt-5">
        <div
            class="flex
            flex-col
            sm:flex-row
            items-center
            p-5
            border-b
            border-slate-200/60
            dark:border-darkmode-400"
            >
            <h6 class="text-lg text-primary font-medium leading-none">Identitas Kapal Pengawas {{ index + 1 }}</h6>

         <div class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
        <button class="btn btn-warning mr-1 mb-2" @click="deleteKapal()">
            <TrashIcon class="w-5 h-5" />
        </button>
         </div>  
        </div>
        
        <div class="p-5">
          <div class="form-inline">
                <label for="horizontal-form-1" class="mb-1 md:mb-0 md:w-60">Kapal Pengawas</label>
                <input id="horizontal-form-1" type="text" class="form-control" placeholder="Cari Kapal Pengawas" />
            </div>
            <div class="form-inline mt-5">
                <label for="horizontal-form-2" class="mb-1 md:mb-0 md:w-60">Nahkoda</label>
                <input id="horizontal-form-2" type="text" class="form-control" placeholder="Cari Nahkoda" />
            </div>
            <div class="form-inline mt-5">
              <button class="btn btn-sm btn-primary  w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" @click="addAwakKapal()">
                + Tambahkan awak kapal pengawas perikanan
            </button>
            </div>
              <div class="form-inline mt-5"
              v-for="(awakkapal, index) in model.awak_kapal"
              :key="awakkapal.uuid"
              >
              <label class="mb-1 md:mb-0 md:w-60">Awak Kapal Pengawas Perikanan</label>
              <TomSelect :options="{
                      placeholder: '--Laut/perairan--'
                      }" class="form-control" @change="dataChange" v-model="awak.text" :index="index">
                      <option value="1">--</option>
                      <option value="2">--</option>
                      <option value="3">--</option>
                      <option value="4">--</option>
                      <option value="5">--</option>
                    
                    </TomSelect>
              </div>

            
        </div>

        </div>
</template>

<script setup>

import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";


const props = defineProps({
    kapal: Object,
    index: Number
});

const emit = defineEmits(["change", "addKapal", "deleteKapal"]);

  const model = ref(JSON.parse(JSON.stringify(props.kapal)));

function addKapal() {
    emit("addKapal", props.index + 1);
}

function getAwakKapal() {
    
}

function setAwakKapal(awak_kapal) {
    return model.value.awak_kapal = awak_kapal;
    console.log(model.value)
}



function addAwakKapal() {

 model.value.awak_kapal.uuid  + 1
 
}

function dataChange() {
  const data = model.value.data.awakkapal;
  console.log(data);
  emit("change", data);
}
function deleteKapal() {
    emit("deleteKapal", props.kapal);
}


</script>