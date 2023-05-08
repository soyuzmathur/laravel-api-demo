<script setup lang="ts">
const route = useRoute()

const productId = Number(route.params.id);

const reviewForm = ref({});
const review = ref({
    valid: false,
    comments: '',
    rating: 0,
    commentsRule: [
        (v: string) => !!v || 'Comments field is required',
    ],
    items: [{}]
})

const { $api } = useNuxtApp();
const { data } = await useAsyncData('data', () => $api.products.getProductData(productId));
const product = data._rawValue.data;

const reviews = await useAsyncData('reviews', () => $api.reviews.getAll(productId));
review.value.items = reviews.data._rawValue.data;

const submitReview = () => {
    reviewForm.value.validate().then(async (data) => {
        if (data.valid) {
            const rating = review.value.rating;
            const comments = review.value.comments;
            const {
                data
            } = await $api.reviews.postReview(productId, {
                rating,
                comments
            })
            review.value.items = data as Array < object > ;
        }
    })
}
</script>
<template>
<v-container>
    <v-row align="center">
        <v-col>
            <v-sheet class="pa-2 ma-2 text-center">
                <v-img src="/PromiseKeeperHero.jpg" cover width="400"></v-img>
            </v-sheet>
        </v-col>
        <v-col>
            <v-sheet class="pa-2 ma-2 text-center">
                <v-btn class="text-h5 ma-5">{{ product.name }} ( ${{ product.price }} )</v-btn>
            </v-sheet>

            <v-list density="compact">
                <v-list-subheader>Reviews</v-list-subheader>

                <v-list-item v-for="(item, index) in review.items" :key="index" :value="item" active-color="primary">
                    <v-list-item-title v-text="item.comments"></v-list-item-title>
                    <template v-slot:prepend>
                        <v-rating class="ma-2" :model-value="item.rating" density="compact"></v-rating>
                    </template>
                </v-list-item>
            </v-list>

        </v-col>
    </v-row>
    <v-row align="center">
        <v-col>
            <v-sheet class="pa-2 ma-2 text-center">
                <v-card class="mx-auto" max-width="300">
                </v-card>

                <label class="text-h3">Add reviews:</label>
                <v-form class="text-left" validate-on="submit" @submit.prevent="submitReview" ref="reviewForm">
                    <label class="text-h5 mb-5">Rating:</label>
                    <v-rating v-model="review.rating" class="ma-2" density="compact"></v-rating>
                    <v-textarea :rules="review.commentsRule" v-model="review.comments" label="Comments"></v-textarea>
                    <v-btn class="me-4 bg-primary" type="submit">
                        submit
                    </v-btn>
                </v-form>
            </v-sheet>
        </v-col>
    </v-row>
</v-container>
</template>
