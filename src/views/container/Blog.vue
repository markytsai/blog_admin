<template>
  <div>
    <Breadcrumb :items="breadItems"/>
    <v-row class="btn-group">
      <v-btn depressed color="primary" @click="goToEditor">写博客</v-btn>
    </v-row>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="blogs"
        :items-per-page="5"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.author }}</td>
          <td class="text-xs-right">{{ props.item.createTime }}</td>
          <td class="text-xs-center">
            <v-btn>修改</v-btn>
            修改/刪除</td>
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
          text: '博客名称',
          align: 'start',
          value: 'title'
        },
        {
          text: '作者',
          value: 'author'
        },
        {
          text: '创建时间',
          value: 'createTime'
        },
        {
          text: '操作',
          align: 'start',
          sortable: false
        }
      ],
      blogs: [
        {
          title: '美联储',
          author: '蔡振亚',
          createTime: '2022-01-02 23:23:23'
        },
        {
          title: '美联储',
          author: '蔡振亚',
          createTime: '2022-01-02 23:23:23'
        }
      ]
    }
  },
  methods: {
    editBlog (blog) {
    },
    moveBlogToTrash (id) {
    },
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
