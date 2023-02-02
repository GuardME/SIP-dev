<template>
  <div class="flex items-center mt-8">
    <h2 class="intro-y text-lg font-medium mr-auto"></h2>
  </div>
  <TabGroup>
    <TabList class="nav-boxed-tabs pb-12">
        <Tab class="w-full py-2" tag="button">Sarana/Fokus Operasi</Tab>
        <Tab class="w-full py-2" tag="button">Peta Operasi</Tab>
        <Tab class="w-full py-2" tag="button">Analisis Indikasi kerawanan</Tab>
    </TabList>
    <TabPanels class="mt-5 mb-5">
        <TabPanel class="leading-relaxed">
        <div class="space-y-6" >
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Sasaran / Fokus Operasi</h3>
                 </div>
        <div class="mt-5 space-y-6 md:col-span-2 md:mt-0">
          <div class="grid grid-cols-3 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label for="company-website" class="block text-sm font-medium text-gray-700">Tanggal Penugasan</label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <Litepicker v-model="daterange" id="crud-form-0" :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }" class="form-control mb-2" autocomplete="off" />

              </div>
            </div>
          </div>

          <div>
            <div class="form-inline mt-5">
              <button class="btn btn-sm btn-primary "  @click="addWilayahOperasi()">
                + Tambah Wilayah Operasi
              </button>
            </div>
            <div class="mt-1">
                <div v-for="(wilayahoperasi, index) in model.wilayah_operasi" :key="wilayahoperasi.id" >
            <FormRepeater
            :wilayahoperasi="wilayahoperasi"
            :index="index"
            @change="wilayahOperasiChange"
            @addWilayahOperasi="addWilayahOperasi"
            @deleteWilayahOperasi="deleteWilayahOperasi"
            />
          </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Fokus/Target Operasi</label>
               <div class="mt-2">
            <ClassicEditor v-model="editorData" />
          </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Kapal Pengawas Perikanan</h3>
          <div class="mt-8 mb-3 form-inline">
          <button class="btn btn-sm btn-primary" @click="addKapal()">
            + Tambahkan Kapal Pengawas Perikanan
          </button>

          </div>
          </div>

       <div v-for="(kapal, index) in model.add_kapal" :key="kapal.id" class="col-span-12">
        <FormIdentitasKapalPengawas
        :kapal="kapal"
        :index="index"
        @change="kapalChange"
        @addKapal="addKapal"
        @deleteKapal="deleteKapal"
         />
   
</div>

      </div>
    </div>

    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Kondisi Cuaca/Gelombang</h3>
        </div>
        <div class="mt-0 md:col-span-2 md:mt-0">
          <ClassicEditor v-model="editorData2" />
        </div>
      </div>
    </div>

        <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Komunikasi</h3>
        </div>
        <div class="mt-0 md:col-span-2 md:mt-0">
          <ClassicEditor v-model="editorData3" />
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
      <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
    </div>
  </div>
        </TabPanel>
        <TabPanel class="leading-relaxed">
              <label for="company-website" class="block text-sm font-medium text-gray-700 mb-5">Tanggal Penugasan</label>
          <Dropzone ref-key="dropzoneMultipleRef" :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  headers: { 'My-Awesome-Header': 'header value' },
                }" class="dropzone">
    <div class="text-lg font-medium">
        Drop files here or click to upload.
    </div>
    <div class="text-gray-600">
        This is just a demo dropzone. Selected files are
        <span class="font-medium">not</span> actually uploaded.
    </div>
</Dropzone>
        </TabPanel>
             <TabPanel class="leading-relaxed">
            <form class="box p-5 space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 sm:space-y-5">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">1. Analisis posisi kapal perikanan menggunakan Automatic Identification System(AIS)
        </h3>
         </div>

        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Uplaod File</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div class="flex max-w-lg rounded-md shadow-sm">
               <Dropzone ref-key="dropzoneSingleRef" :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  maxFiles: 1,
                  headers: { 'My-Awesome-Header': 'header value' },
                }" class="dropzone">
                  <div class="text-lg font-medium">
                      Pilih File
                  </div>
                  <div class="text-gray-600">
                  Tambah Foto dengan format JPEG atau PNG ukuran maks 5 MB
                  </div>
              </Dropzone>
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Koordinat Kapal</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <textarea id="about" name="about" rows="3" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

            </div>
          </div>


        </div>
      </div>

      <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">2. Analisis posisi kapal perikanan Berbendera Indonesia menggunakan vessel monitoring system(vms)</h3>

        </div>
        <div class="space-y-6 sm:space-y-5">
        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Uplaod File</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div class="flex max-w-lg rounded-md shadow-sm">
               <Dropzone ref-key="dropzoneSingleRef" :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  maxFiles: 1,
                  headers: { 'My-Awesome-Header': 'header value' },
                }" class="dropzone">
                  <div class="text-lg font-medium">
                      Pilih File
                  </div>
                  <div class="text-gray-600">
                  Tambah Foto dengan format JPEG atau PNG ukuran maks 5 MB
                  </div>
              </Dropzone>
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Koordinat Kapal</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <textarea id="about" name="about" rows="3" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900"> 3. Analisis Daerah Rawan Pelanggaran menggunakan Data Hasil Pemantauan Air Surveilance</h3>

        </div>
        <div class="space-y-6 divide-y divide-gray-200 sm:space-y-5">
               <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Uplaod File</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div class="flex max-w-lg rounded-md shadow-sm">
               <Dropzone ref-key="dropzoneSingleRef" :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  maxFiles: 1,
                  headers: { 'My-Awesome-Header': 'header value' },
                }" class="dropzone">
                  <div class="text-lg font-medium">
                      Pilih File
                  </div>
                  <div class="text-gray-600">
                  Tambah Foto dengan format JPEG atau PNG ukuran maks 5 MB
                  </div>
              </Dropzone>
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Koordinat Kapal</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <textarea id="about" name="about" rows="3" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
        <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
      </div>
    </div>
  </form>
        </TabPanel>
    </TabPanels>
</TabGroup>

</template>
<script setup>
import { ref } from "vue";
import FormRepeater from "@/components/form-repeater/Main.vue";
import FormIdentitasKapalPengawas from "@/components/form-identitas-kapal-pengawas/Main.vue";
import { v4 as uuidv4 } from "uuid";

const categories = ref([1, 3]);
const editorConfig = {
  toolbar: {
    items: ["bold", "italic", "link"],
  },
};
const editorData = ref("<p></p>");

let model = ref({
  wilayah_operasi: [],
  add_kapal: [],
})
function addWilayahOperasi(index) {
  const newWilayahOperasi = {
    
    data: {},
  };
  model.value.wilayah_operasi.splice(index, 0, newWilayahOperasi);
}


function addKapal(index) {
  const newKapal = {
    kapal: "",
    id: uuidv4(),
    data: {}
  };
  model.value.add_kapal.splice(index, 0, newKapal);
}

function deleteWilayahOperasi(wilayahoperasi) {
  model.value.wilayah_operasi = model.value.wilayah_operasi.filter(
    (q) => q !== wilayahoperasi
  );
}


function kapalChange(kapal) {
    model.value.add_kapal = model.value.add_kapal.map((q) => {
    if (q.id === kapal.id) {
      return JSON.parse(JSON.stringify(kapal));
    }
    return q;
  });
}


function deleteKapal(kapal) {
  model.value.add_kapal = model.value.add_kapal.filter(
    (q) => q !== kapal
  );
}


</script>