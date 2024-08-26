<template>
    <div>
        <header class="bg-red-600 p-4">
            <div class="container mx-auto">
                <h1 class="text-white text-3xl font-bold">SKÆBNER</h1>
            </div>
        </header>

        <main
            class="container mx-auto pt-4 pb-6 grid grid-cols-1 lg:grid-cols-custom-2 gap-20"
        >
            <section>
                <div class="rounded shadow bg-white">
                    <Card
                        :options="{
                            customClass: 'xl:h-[550px]',
                            src: '/img/img-0.jpg',
                            title: 'En læser fortæller',
                            subtitle: 'Jeg higede efter omsorg - del 2:5',
                        }"
                    >
                        <template #video>
                            <Icon name="uil:youtube" style="color: black" />
                        </template>
                    </Card>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Card
                        :options="{
                            customClass: 'h-80',
                            src: '/img/img-1.avif',
                            title: 'Når livet gør ondt',
                            subtitle:
                                '33-årige Dagmar har måske kun få måneder tilbage',
                        }"
                    />

                    <Card
                        :options="{
                            customClass: 'h-80',
                            src: '/img/img-2.avif',
                            title: 'Når livet gør ondt',
                            subtitle:
                                'Stinne og Christian er uhelbredeligt syge med kræft',
                        }"
                    />
                </div>
            </section>

            <aside>
                <Advertising />
            </aside>
        </main>
    </div>
</template>
