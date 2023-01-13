<template>
    <TopBarPortal />
        <div class="intro-y box p-5 mt-5">
            <div class="mx-6 pb-8 mt-5">
                <TinySlider :options="{
                                autoplay: false,
                                controls: true,
                                items: 1,
                                nav: true,
                                responsive: {
                                  600: {
                                    items: 3,
                                  },
                                  480: {
                                    items: 2,
                                  },
                                },
                              }">
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                1
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                2
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                3
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                4
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                5
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                6
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                7
                            </h3>
                        </div>
                    </div>
                    <div class="h-32 px-2">
                        <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                                8
                            </h3>
                        </div>
                    </div>
                </TinySlider>
            </div>
        </div>

        <div class="intro-y box mt-5 mb-5 p-5">
            <TabGroup>
                <!-- BEGIN: Pricing Tab -->
                <div class="intro-y flex justify-center mt-6">
                  <TabList
                    class="pricing-tabs nav-pills w-auto box rounded-full mx-auto overflow-hidden"
                  >
                    <Tab class="w-32 lg:w-40 py-2 lg:py-6" tag="button">Pengawasan</Tab>
                    <Tab class="w-32 lg:w-40 py-2 lg:py-3" tag="button">Pelayanan Administrasi</Tab>
                  </TabList>
                </div>
      
                <div class="flex mt-10">
                  <TabPanels>
                    <TabPanel class="grid grid-cols-12 gap-6 mt-5">
                        <a
                        href=""
                        class="intro-y col-span-12 lg:col-span-4 box py-10 border-2 border-primary dark:border-primary"
                      >
                        <ShieldIcon class="block w-12 h-12 text-primary mx-auto" />
                        <div class="font-medium text-center text-base mt-3">
                          Sistem Informasi Pengawasan
                        </div>
                        <div class="text-slate-500 mt-2 w-3/4 text-center mx-auto">
                          Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </a>
                      <a href="" class="intro-y col-span-12 lg:col-span-4 box py-10">
                        <SendIcon class="block w-12 h-12 text-primary mx-auto" />
                        <div class="font-medium text-center text-base mt-3">
                          Surat Izin Berusahan Kapal Perikanan
                        </div>
                        <div class="text-slate-500 mt-2 w-3/4 text-center mx-auto">
                            Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </a>
                      <a href="" class="intro-y col-span-12 lg:col-span-4 box py-10">
                        <TrendingUpIcon class="block w-12 h-12 text-primary mx-auto" />
                        <div class="font-medium text-center text-base mt-3">
                            Monitoring Kapal PSDKP
                        </div>
                        <div class="text-slate-500 mt-2 w-3/4 text-center mx-auto">
                          Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </a>
                        
                     
                    </TabPanel>

                    <TabPanel class="grid grid-cols-12 gap-6 mt-5">
                        <a
                        href=""
                        class="intro-y col-span-12 lg:col-span-4 box py-10 border-2 border-primary dark:border-primary"
                      >
                        <ShieldIcon class="block w-12 h-12 text-primary mx-auto" />
                        <div class="font-medium text-center text-base mt-3">
                            Perizinan tugas belajar
                        </div>
                        <div class="text-slate-500 mt-2 w-3/4 text-center mx-auto">
                          Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </a>
                      <a href="" class="intro-y col-span-12 lg:col-span-4 box py-10">
                        <SendIcon class="block w-12 h-12 text-primary mx-auto" />
                        <div class="font-medium text-center text-base mt-3">
                            Registrasi Kapal Pengawas Perikanan
                        </div>
                        <div class="text-slate-500 mt-2 w-3/4 text-center mx-auto">
                            Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </a>
                      <a href="" class="intro-y col-span-12 lg:col-span-4 box py-10">
                        <TrendingUpIcon class="block w-12 h-12 text-primary mx-auto" />
                        <div class="font-medium text-center text-base mt-3">
                            Penatausahaan Barang Milik Negara
                        </div>
                        <div class="text-slate-500 mt-2 w-3/4 text-center mx-auto">
                          Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </a>
                    </TabPanel>
                    
                    <TabPanel class="flex flex-col lg:flex-row">
                        <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
                            <div class="h-64 bg-cover hover:bg-gray" style="background-image: url('https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png')"></div>
                            <div class="mx-6 my-4 border-b border-gray-light">
                              <div class="font-medium text-base text-gray-darker mb-4">Perizinan tugas belajar</div>
                              <p class="font-normal text-gray-dark text-sm mb-2">
                                Aplikasi Sistem Pengawasan yang ada pada Ditjen PSDKP
                              </p>
                            </div>
                          </div>

                          <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
                            <div class="h-64 bg-cover hover:bg-gray" style="background-image: url('https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png')"></div>
                            <div class="mx-6 my-4 border-b border-gray-light">
                              <div class="font-medium text-base text-gray-darker mb-4">Registrasi Kapal Pengawas Perikanan</div>
                              <p class="font-normal text-gray-dark text-sm mb-2">
                                Aplikasi Pendaftara Berusaha Untuk Mendaftarkan Kapal Perikanan
                              </p>
                            </div>
                          </div>
                    </TabPanel>
                  </TabPanels>
                </div>
              </TabGroup>
         
        </div>
</template>

<script setup>
import TopBarPortal from "@/components/top-bar-portal/Main.vue";
</script>
