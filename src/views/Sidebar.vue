<template>
  <div>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app class="primary">
            <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 admin-title">
            博客后台
          </v-list-item-title>
          <v-list-item-subtitle class="admin-subtitle">
            @caizhenya
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :to="item.path">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>博客后台</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>dots-horizontal</v-icon>
      </v-btn>
    </v-toolbar>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      drawer: true,
      clipped: false,
      items: [
        {
          title: '文章列表',
          path: '/blog/list',
          icon: 'mdi-domain',
          items: []
        },
        {
          title: '标签列表',
          path: '/blog/tag',
          icon: 'mdi-domain',
          items: []
        }
      ]
    }
  },
  methods: {
    switchPage (item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style scoped>
.v-application .primary {
  background-color: #2f4256 !important;
  border-color: #2f4256 !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #e3e4e7;
}

.v-list {
  color: white !important;
}

.admin-title {
  color: #ff8665 !important;
}
.admin-title {
   color: rgb(216 219 222) !important;
}
</style>
