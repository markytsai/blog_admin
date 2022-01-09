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
        <template v-slot:item="row">
          <tr>
            <td class="text-xs-right">{{ row.item.title }}</td>
            <td class="text-xs-right">{{ row.item.author }}</td>
            <td class="text-xs-right">{{ row.item.createTime }}</td>
            <td>
              <v-btn class="mx-2" light x-small @click="editBlog(row.item)">
                Edit
              </v-btn>
              <v-btn class="mx-2" light x-small @click="publishBlog(row.item)">
                Publish
              </v-btn>
              <v-btn class="mx-2" light x-small @click="moveBlogToTrash(row.item)">
                Delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Breadcrumb from '@/views/Breadcrumb'
import { get, post } from '/src/request/api.js'

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
    getBlogs () {
      get('/api/blogs')
    },
    editBlog (blog) {
      this.$router.push('/blog/editor')
    },
    publishBlog (blog) {
      post('/api/publish/blog', { blogId: blog.blogId })
      this.getBlogs()
    },
    moveBlogToTrash (blog) {
      post('/api/deleteBlog', { blogId: blog.blogId })
      this.getBlogs()
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
