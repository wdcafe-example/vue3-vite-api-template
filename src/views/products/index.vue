<template>
  <div class="products">
    <v-container>
      <h1>Products</h1>

      <v-row>
        <v-col v-for="product in products" :key="product.id" cols="12" md="4" class="d-flex">
          <!-- 주축기준으로 정렬설정 : 현재는 flex-column 설정이라 column 기준으로 정렬 -->
          <v-card class="d-flex flex-column justify-space-between w-100 pa-3"> 
            <v-card-title class="mt-5 mb-3 text-h4 font-weight-bold">{{ product.title }}</v-card-title>
            <v-card-text class="mb-3 text-xl">{{ product.description }}</v-card-text>
            <v-card-actions>
              <v-btn :to="`/products/${product.id}`" color="blue-darken-4 px-3" rounded="3"  variant="flat">View Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script setup>
  // fetch the products
  import { ref, onMounted } from 'vue'
  const products = ref([])

  onMounted(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(data => products.value = data) 
      .then(data => {
        products.value = data.slice(0, 12) // 첫 12개의 항목만 선택
      })
      .catch(error => {
        console.error('Failed to fetch products:', error)
      })
  })
</script>

<style scoped lang="scss">
  
</style>
