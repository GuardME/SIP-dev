<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto"></h2>
  </div>
  <!-- BEGIN: Page Layout -->
  <div class="intro-y box p-5 mt-5">
    <TabGroup>
      <TabList class="nav-tabs">
          <Tab class="w-full py-2" tag="button">Dashboard Data Kapal Pengawasan</Tab>
          <Tab class="w-full py-2" tag="button">Dashboard Hasil Operasi Kapal Pengawasan</Tab>
      </TabList>
      <TabPanels class="border-l border-r border-b">
          <TabPanel class="leading-relaxed p-5">
              
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-12">
              <img src="../../assets/logo/ship.svg" class="w-10" />
              <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Kapal Pengawas</h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">20</p>
              <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                  Lihat 
                  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>

              
            </div>
  
            

            <div class="col-span-12 2xl:col-span-9">
                
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 xl:col-span-8 mt-6">
                  <div class="intro-y box p-5 mt-6 sm:mt-5">
                    <h2 class="text-lg font-medium truncate mr-5 mb-2">Lokasi Kapal Pengawas</h2>
                    <ReportMap class="report-maps mt-5 bg-slate-300 rounded-md" />
                  </div>
                </div>
    
                <div class="col-span-12 xl:col-span-4 mt-6">
                  <div class="intro-y box p-5 mt-6 sm:mt-5">
                    <h2 class="text-lg font-medium truncate mr-5">Daftar Kapal Pengawas Sedang Beroperasi</h2>
                    <div class="overflow-x-auto">
                      <table class="table table-striped">
                          <thead>
                              <tr>
                                  <th class="whitespace-nowrap">#</th>
                                  <th class="whitespace-nowrap">Nama Kapal Pengawas</th>
                                  <th class="whitespace-nowrap">Tanggal Operasi</th>
                                  <th class="whitespace-nowrap">Wilayah Operasi</th>
                                  
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>Angelina</td>
                                  <td>Jolie</td>
                                  <td>@angelinajolie</td>
                              </tr>
                              <tr>
                                  <td>2</td>
                                  <td>Brad</td>
                                  <td>Pitt</td>
                                  <td>@bradpitt</td>
                              </tr>
                              <tr>
                                  <td>3</td>
                                  <td>Charlie</td>
                                  <td>Hunnam</td>
                                  <td>@charliehunnam</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            

          </TabPanel>

          <TabPanel class="leading-relaxed p-5">
              It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose
              (injected humour and the like).
          </TabPanel>
      </TabPanels>
  </TabGroup>
  </div>

  



  <!-- END: Page Layout -->
</template>
<script setup>
import ReportMap from "@/components/report-map/Main.vue";
import {ref, onMounted} from 'vue';

</script>