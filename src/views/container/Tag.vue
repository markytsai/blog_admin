<template>
  <v-card>
    <Breadcrumb :items="breadItems"/>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
import Breadcrumb from '@/views/Breadcrumb'
export default {
  name: 'Tag',
  components: { Breadcrumb },
  data () {
    return {
      breadItems: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/'
        },
        {
          text: 'Tag列表',
          disabled: false,
          href: '/blog/list'
        }
      ],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Calories',
          value: 'calories'
        },
        {
          text: 'Fat (g)',
          value: 'fat'
        },
        {
          text: 'Carbs (g)',
          value: 'carbs'
        },
        {
          text: 'Protein (g)',
          value: 'protein'
        },
        {
          text: 'Iron (%)',
          value: 'iron'
        }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
