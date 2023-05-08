<script setup lang="ts">
const f = ref({
    products: {},
    avaibility: {
        label: 'All',
        value: ''
    },
    sortBy: 'price',
    order: {
        label: 'Lowest first',
        value: 'ASC'
    },
    category: {
        name: 'Select Category',
        id: 0
    },
    avaibilityOptions: [{
            label: 'Show All',
            value: ''
        },
        {
            label: 'In Stock',
            value: '1'
        },
        {
            label: 'Out of Stock',
            value: '2'
        }
    ],
    orderOptions: [{
            label: 'Lowest first',
            value: 'ASC'
        },
        {
            label: 'Highest first',
            value: 'DESC'
        }
    ]
})

const {
    $api
} = useNuxtApp();
const getProducts = async () => {
    const filters = {
        sortBy: f.value.sortBy,
        order: f.value.order.value,
        categoryId: f.value.category.id,
        inStock: f.value.avaibility.value
    }
    console.log(filters);
    const {
        data
    } = await $api.products.getAllProducts(filters)
    f.value.products = data;
}

const products = await useAsyncData('products', getProducts)
const categories = await useAsyncData('data', () => $api.categories.getAll());
</script>
<template>
<v-item-group selected-class="bg-primary">
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-select v-model="f.order" :hint="`${f.order.label}, ${f.order.value}`" :items="f.orderOptions" item-title="label" item-value="value" label="Sort By" persistent-hint return-object single-line @update:modelValue="getProducts"></v-select>
            </v-col>
            <v-col cols="3">
                <v-select v-model="f.category" :hint="`${f.category.name}`" :items="categories.data.value.data" item-title="name" item-value="id" label="Category" persistent-hint return-object single-line @update:modelValue="getProducts"></v-select>
            </v-col>
            <v-col cols="3">
                <v-select v-model="f.avaibility" :hint="`${f.avaibility.label}, ${f.avaibility.value}`" :items="f.avaibilityOptions" item-title="label" item-value="value" label="Availability" persistent-hint return-object single-line @update:modelValue="getProducts"></v-select>
            </v-col>
        </v-row>
        <v-row v-if="f.products.length > 0">
            <v-col v-for="product in f.products" :key="product.id" cols="12" md="4">
                <NuxtLink class="text-h5 ma-5" :to="'/product/'+product.id">
                    <v-item>
                        <v-card dark>
                            <v-img src="/PromiseKeeperHero.jpg" cover></v-img>
                            <div class="text-h5 flex-grow-1 ma-5 text-center">
                                {{ product.name }} ( ${{ product.price }} )
                            </div>
                        </v-card>
                    </v-item>
                </NuxtLink>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>No record found.</v-col>
        </v-row>
    </v-container>
</v-item-group>
</template>
