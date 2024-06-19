<template>
    <main class="max-w-screen-xl mx-auto min-h-screen">
        <div class="w-full h-screen flex flex-col justify-center items-center">
            <div class="grid grid-cols-2">
                <div>
                    <img src="/gif/giphy.gif" class="mx-auto" />
                </div>
                <div class="mt-10">
                    <h1 class="text-2xl">Welcome to BeYou Studio!</h1>
                    <h2 class="text-2xl mt-6 bg-green-400 p-4 rounded text-white">안녕하세요! (Annyeonghaseyo!)</h2>
                    <h3 class="text-xl my-6 ">
                        Start your journey to master Korean with our easy and
                        fun lessons. Dive into Hangul, expand your vocabulary,
                        and explore Korean culture with us. 
                    </h3>
                    <nuxt-link to="/beginner/" class="mt-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded">
                        Let's learn
                        together!
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="mb-6 md:mb-0">
                <h4 class="text-3xl font-bold">Vocabularies</h4>
                <p>
                    ຮຽນຄໍາສັບແລະປະໂຫຍກພາສາເກົາຫລີທີ່ອອກແບບມາສໍາຫລັບຜູ້ເວົ້າພາສາລາວ.
                    ແຕ່ລະລາຍການປະກອບດ້ວຍຄໍາເກົາຫລີ, ການອ່ານອອກສຽງ,
                    ແລະການແປພາສາລາວ.
                    ສ້າງພື້ນຖານຄໍາສັບເພື່ອການສື່ສານທີ່ມີປະສິດທິພາບໃນຊີວິດປະຈໍາວັນຂອງທ່ານ.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-vocabulary-lists"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>

            <div class="mb-6 md:mb-0">
                <h4 class="text-3xl font-bold">Phrases</h4>
                <p>
                    ຮຽນຮູ້ຄໍາສັບແລະປະໂຫຍກພາສາເກົາຫລີທີ່ໃຊ້ປະຈໍາວັນ.
                    ພາກນີ້ມີຄໍາແສດງຄວາມຄິດທີ່ພົບຫຼາຍກັບການອ່ານອອກສຽງແລະການແປພາສາລາວ,
                    ທໍາໃຫ້ທ່ານສາມາດສື່ສານໃນສະຖານະການຕ່າງໆໄດ້ຢ່າງມີປະສິດທິພາບ.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-phrases"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>

            <div class="mb-6 md:mb-0">
                <h4 class="text-3xl font-bold">Conversations</h4>
                <p>
                    ປັບປຸງທັກສະການເວົ້າພາສາເກົາຫລີຂອງທ່ານດ້ວຍບົດສົນທະນາຈາກຊີວິດຈິງ.
                    ແຕ່ລະບົດປະກອບດ້ວຍຂໍ້ຄວາມພາສາເກົາຫລີ, ການແປພາສາລາວ,
                    ແລະສຽງອາດີໂອທີ່ແມ່ນຍໍາ.
                    ຝຶກຝົນແລະເຂົ້າຮ່ວມກັບນັກເວົ້າພາສາເກົາຫລີເພື່ອສື່ສານທີ່ມີຄວາມໝາຍໄດ້ຢ່າງມັ່ນໃຈ.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-conversations"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h4 class="text-3xl font-bold">Learn anytime, anywhere.</h4>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts"></script>
