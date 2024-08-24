<template>
  <div class="products">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="py-5 mb-3 text-center text-7xl font-weight-bold">Product Details {{ products.id }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card class="justify-center pa-5 w-75 h-100 d-flex align-center ma-auto">
            <v-img :src="products.image" alt="Product Image" class="w-75" />
          </v-card>
        </v-col>
        <v-col cols="8">
          <h2 class="text-5xl font-weight-bold">{{ products.title }}</h2>
          <p class="my-8 text-body-4">{{ products.description }}</p> 
          <p class="text-h5 font-weight-bold mb-11">$ {{ products.price }}</p>
          <v-btn to="/products" class="text-h6">제품 목록으로 돌아가기</v-btn>
        </v-col>
      </v-row>
    </v-container>      
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(route.params.id)

const products = ref({})

onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${id.value}`)
    .then(res => res.json())
    .then(data => products.value = data) 
})

</script>

<style scoped lang="scss">

</style>
