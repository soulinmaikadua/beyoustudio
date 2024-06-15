<template>
    <main class="max-w-screen-xl mx-auto min-h-screen">
        <div class="w-full h-screen flex flex-col justify-center items-cente">
            <div class="grid grid-cols-1">
                <div>
                    <img src="/gif/giphy.gif" class="mx-auto" />
                </div>
                <div class="mt-10">
                    <h1 class="text-xl">
                        Welcome! Our website helps Lao speakers learn Korean
                        easily and enjoyably. Whether you're a beginner or
                        looking to improve, we offer lessons and practice tools
                        tailored just for you. Join our community and start
                        mastering Korean today!
                    </h1>

                    <h2 class="mt-6 text-xl">
                        ຍິນດີຕ້ອນຮັບ!
                        ເວັບໄຊທ໌ຂອງພວກເຮົາຊ່ວຍໃຫ້ຜູ້ເວົ້າພາສາລາວຮຽນພາສາເກົາຫລີຢ່າງງ່າຍດາຍແລະມີຄວາມສົນຸກ.
                        ບໍ່ວ່າທ່ານຈະເປັນມືໃໝ່ຫລືຕ້ອງການປັບປຸງ,
                        ພວກເຮົາມີບົດຮຽນແລະເຄື່ອງມືຝຶກຝົນສໍາລັບທ່ານ.
                        ເຂົ້າຮ່ວມຊຸມຊົນຂອງພວກເຮົາແລະເລີ່ມຕົ້ນຮຽນພາສາເກົາຫລີໃນມື້ນີ້!
                    </h2>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="mb-6 md:mb-0">
                <h4 class="text-3xl font-bold">ຄໍາສັບພາສາເກົາຫລີ</h4>
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
                        >ຮຽນອ່ານເລີຍ</nuxt-link
                    >
                </div>
            </div>

            <div class="mb-6 md:mb-0">
                <h4 class="text-3xl font-bold">ປະໂຫຍກ</h4>
                <p>
                    ຮຽນຮູ້ຄໍາສັບແລະປະໂຫຍກພາສາເກົາຫລີທີ່ໃຊ້ປະຈໍາວັນ.
                    ພາກນີ້ມີຄໍາແສດງຄວາມຄິດທີ່ພົບຫຼາຍກັບການອ່ານອອກສຽງແລະການແປພາສາລາວ,
                    ທໍາໃຫ້ທ່ານສາມາດສື່ສານໃນສະຖານະການຕ່າງໆໄດ້ຢ່າງມີປະສິດທິພາບ.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-phrases"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >ຮຽນເວົ້າເລີຍ</nuxt-link
                    >
                </div>
            </div>

            <div class="mb-6 md:mb-0">
                <h4 class="text-3xl font-bold">ບົດສົນທະນາ</h4>
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
                        >ຮຽນເວົ້າເລີຍ</nuxt-link
                    >
                </div>
            </div>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h4 class="text-3xl font-bold">
                    ສາມາດຮຽນ​ຮູ້​ໄດ້​ທຸກ​ເວ​ລາ​, ທຸກ​ແຫ່ງ​ຫົນ​.
                </h4>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts"></script>
