<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <a href="" class="ml-auto flex items-center text-primary">
              <RefreshCcwIcon class="w-4 h-4 mr-3" /> Reload Data
            </a>
          </div>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <MousePointerIcon class="report-box__icon text-primary" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="33% Higher than last month"
                      >
                        33%
                        <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">10</div>
                  <div class="text-base text-slate-500 mt-1">Kapal Perikanan Yang diperiksa</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <CreditCardIcon class="report-box__icon text-pending" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-danger cursor-pointer"
                        content="2% Lower than last month"
                      >
                        2%
                        <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">2</div>
                  <div class="text-base text-slate-500 mt-1">Kapal Perikanan Yang Di tangkap</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <MonitorIcon class="report-box__icon text-warning" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="12% Higher than last month"
                      >
                        12% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">3</div>
                  <div class="text-base text-slate-500 mt-1">
                    Kapal Pengawas yang Beroprasi
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <UserIcon class="report-box__icon text-success" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="22% Higher than last month"
                      >
                        22% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">140</div>
                  <div class="text-base text-slate-500 mt-1">
                    Pelaku Usaha
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Pengaduan Masyarakat</h2>
            <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
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
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="flex">
                <div>
                  <div
                    class="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium"
                  >
                    15
                  </div>
                  <div class="mt-0.5 text-slate-500">Bulan ini</div>
                </div>
                <div
                  class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"
                ></div>
                <div>
                  <div class="text-slate-500 text-lg xl:text-xl font-medium">
                    10
                  </div>
                  <div class="mt-0.5 text-slate-500">Bulan Lalu</div>
                </div>
              </div>
              <Dropdown class="md:ml-auto mt-5 md:mt-0">
                <DropdownToggle class="btn btn-outline-secondary font-normal">
                  Filter berdasarkan jenis pengaduan
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </DropdownToggle>
                <DropdownMenu class="w-40">
                  <DropdownContent class="overflow-y-auto h-32">
                    <DropdownItem>Instagram</DropdownItem>
                    <DropdownItem>Whatsapp</DropdownItem>
                    <DropdownItem>Langsung</DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class="report-chart">
              <ReportLineChart :height="275" class="mt-6 -mb-6" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Daerah yang sedang operasi</h2>
            <a href="" class="ml-auto text-primary truncate">Lihat</a>
          </div>
          <div class="intro-y box p-5 mt-5">
            <div class="mt-3">
              <ReportPieChart :height="213" />
            </div>
            <div class="w-52 sm:w-auto mx-auto mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="truncate">Lampulo</span>
                <span class="font-medium ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span class="truncate">Jakarta</span>
                <span class="font-medium ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span class="truncate">Bitung</span>
                <span class="font-medium ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Weekly Top Seller -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Pelaku Usaha</h2>
            <a href="" class="ml-auto text-primary truncate">Lihat Selengkapnya</a>
          </div>
          <div class="intro-y box p-5 mt-5">
            <div class="mt-3">
              <ReportDonutChart :height="213" />
            </div>
            <div class="w-52 sm:w-auto mx-auto mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="truncate">Nelayan</span>
                <span class="font-medium ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span class="truncate">Perusahaan Ikan</span>
                <span class="font-medium ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span class="truncate">Perusahaan --</span>
                <span class="font-medium ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Official Store -->
        <div class="col-span-12 xl:col-span-8 mt-6">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Kapal Perikanan Yang di tangkap</h2>
            <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
              <MapPinIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <input
                type="text"
                class="form-control sm:w-56 box pl-10"
                placeholder="Filter berdasarkan lokasi"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div>
              25 kapal, Klik untuk Melihat Detail.
            </div>
            <MapUtama class="report-maps mt-5 bg-slate-200 rounded-md" />
          </div>
        </div>
        <!-- END: Official Store -->
        <!-- BEGIN: Weekly Best Sellers -->
        <div class="col-span-12 xl:col-span-4 mt-6">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
             Kapal yang ditangkap 
            </h2>
          </div>
          <div class="mt-5">
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              class="intro-y"
            >
              <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                <div
                  class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                >
               
                </div>
                <div class="ml-4 mr-auto">
                  <div class="font-medium">
                    {{ faker.users[0].name }}
                  </div>
                  <div class="text-slate-500 text-xs mt-0.5">
                    {{ faker.dates[0] }}
                  </div>
                </div>
                <div
                  class="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium"
                >
                 3 ABK
                </div>
              </div>
            </div>
            <a
              href=""
              class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
              >Lihat Selengkapnya</a
            >
          </div>
        </div>
        <!-- END: Weekly Best Sellers -->
        

      </div>
    </div>
    <div class="col-span-12 2xl:col-span-3">
      <div class="2xl:border-l -mb-10 pb-10">
        <div class="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
          <!-- BEGIN: Transactions -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3 2xl:mt-8"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Kapal Yang di tangkap</h2>
            </div>
            <div class="mt-5">
              <div
                v-for="(faker, fakerKey) in $_.take($f(), 5)"
                :key="fakerKey"
                class="intro-x"
              >
                <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    
                  </div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">
                      {{ faker.users[0].name }}
                    </div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      {{ faker.dates[0] }}
                    </div>
                  </div>
          
                </div>
              </div>
              <a
                href=""
                class="intro-x w-full block text-center rounded-md py-3 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
                >Lihat</a
              >
            </div>
          </div>
          <!-- END: Transactions -->
          <!-- BEGIN: Recent Activities -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Kapal Pengawas yang sedang Beroperasi
              </h2>
              <a href="" class="ml-auto text-primary truncate">Lihat</a>
            </div>
            <div
              class="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5"
            >
              <div class="intro-x relative flex items-center mb-3">
                <div
                  class="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5"
                >
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    
                  </div>
                </div>
                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div class="flex items-center">
                    <div class="font-medium">
                      Hiu Macan
                    </div>
                    <div class="text-xs text-slate-500 ml-auto">07:00 PM</div>
                  </div>
                  <div class="text-slate-500 mt-1">Sedang Beroperasi</div>
                </div>
              </div>
              <div class="intro-x relative flex items-center mb-3">
                <div
                  class="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5"
                >
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                 
                  </div>
                </div>
                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div class="flex items-center">
                    <div class="font-medium">
                      Hiu 15
                    </div>
                    <div class="text-xs text-slate-500 ml-auto">07:00 PM</div>
                  </div>
                  <div class="text-slate-500">
                    <div class="mt-1">Sedang melakukan penangkapan</div>
                    <div class="flex mt-2">
                      <Tippy
                        tag="div"
                        class="w-8 h-8 image-fit mr-1 zoom-in"
                        
                      >
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-md border border-white"
                          :src="$f()[8].images[0]"
                        />
                      </Tippy>
            
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
          <!-- END: Recent Activities -->
          <!-- BEGIN: Important Notes -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-auto">
                Aduan Masyarakat
              </h2>
              <button
                data-carousel="important-notes"
                data-target="prev"
                class="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                @click="prevImportantNotes"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                data-carousel="important-notes"
                data-target="next"
                class="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                @click="nextImportantNotes"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <div class="mt-5 intro-x">
              <div class="box zoom-in">
                <TinySlider ref-key="importantNotesRef">
                  <div class="p-5">
                    <div class="text-base font-medium truncate">
                      Wahyu (By Instagram )
                    </div>
                    <div class="text-slate-400 mt-1">20 Hours ago</div>
                    <div class="text-slate-500 text-justify mt-1">
                      Telah terjadi pengeboman ilegal di daerah tarakan
                    </div>
                    <div class="font-medium flex mt-5">
                      <button type="button" class="btn btn-secondary py-1 px-2">
                        Tindak Lanjut
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                  <div class="p-5">
                    <div class="text-base font-medium truncate">
                      Brian (By Whatsapp)
                    </div>
                    <div class="text-slate-400 mt-1">20 Hours ago</div>
                    <div class="text-slate-500 text-justify mt-1">
                      Telah terjadi penangkapan ikan ilegal di daerah bitung
                    </div>
                    <div class="font-medium flex mt-5">
                      <button type="button" class="btn btn-secondary py-1 px-2">
                        Tindak Lanjut
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                  <div class="p-5">
                    <div class="text-base font-medium truncate">
                      Sarah (By Website)
                    </div>
                    <div class="text-slate-400 mt-1">20 Hours ago</div>
                    <div class="text-slate-500 text-justify mt-1">
                     Terjadi Pencemaran di laut
                    </div>
                    <div class="font-medium flex mt-5">
                      <button type="button" class="btn btn-secondary py-1 px-2">
                        Tindak Lanjut
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
          </div>
          <!-- END: Important Notes -->
   
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import ReportLineChart from "@/components/report-line-chart/Main.vue";
import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
import ReportPieChart from "@/components/report-pie-chart/Main.vue";
import ReportMap from "@/components/report-map/Main.vue";
import MapUtama from "@/components/map-utama/Main.vue" 
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";

const salesReportFilter = ref();
const importantNotesRef = ref();

provide("bind[importantNotesRef]", (el) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("prev");
};

const nextImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("next");
};
</script>
