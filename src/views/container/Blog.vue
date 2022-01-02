<template>
  <div>
    <Breadcrumb :items="breadItems"/>
    <v-row class="btn-group">
      <v-btn depressed color="primary" @click="goToEditor">写博客</v-btn>
    </v-row>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.option="{ item }">
          <v-icon small class="mdi mdi-menu" @click="editBlog(item)">mdi-domain</v-icon>
          <v-icon small @click="moveBlogToTrash(item.id)">delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Breadcrumb from '@/views/Breadcrumb'

export default {
  name: 'Blog',
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
          text: '博客列表',
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
        },
        {
          text: 'Operations',
          value: 'operation'
        }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          operation: ''
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
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        }
      ]
    }
  },
  methods: {
    editBlog (blog) {
    },
    moveBlogToTrash (id) {},
    goToEditor () {
      this.$router.push('/blog/editor')
    }
  }
}
</script>

<style scoped>
.btn-group {
  margin: 10px 0;
}
</style>
