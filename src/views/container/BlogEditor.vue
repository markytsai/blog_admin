<template>
  <div class="editor-wrapper">
    <div class="editor-area">
      <RichTextEditor/>
    </div>
    <div class="blog-detail-area">
      <v-row>
        <span>博客详情</span>
      </v-row>
      <v-row>
        <v-text-field
          label="文章title"
          hide-details="auto"
        />
      </v-row>
      <v-row>
        <v-text-field label="博客摘要"/>
      </v-row>
      <v-row>
        <v-select
          v-model="selectedTags"
          :items="tagOptions"
          item-text="name"
          item-value="id"
          attach
          chips
          label="标签"
          multiple
          clearable
        ></v-select>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="selectedCategory"
            :items="categoryOptions"
            item-text="name"
            item-value="id"
            attach
            chips
            label="分类-一级目录"
            clearable
          />
        </v-col>
        <v-col>
          <v-select
            v-model="selectedSubCategory"
            :items="subCategoryOptions"
            item-text="name"
            item-value="id"
            attach
            chips
            label="分类-二级目录"
            clearable
          />
        </v-col>
      </v-row>
      <v-row class="blog-btn-group">
        <v-btn depressed color="primary">发布
        </v-btn>
        <v-btn depressed color="primary">保存
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import RichTextEditor from '@/views/RichTextEditor'

export default {
  name: 'BlogEditor',
  components: { RichTextEditor },
  data () {
    return {
      tagOptions: [{
        id: 1,
        name: '金融'
      }, {
        id: 2,
        name: '政治'
      }, {
        id: 3,
        name: '经济'
      }],
      categoryOptions: [
        {
          id: 1,
          name: '外刊',
          subCategories: [
            {
              id: 2,
              name: '经济学人'
            }
          ]
        },
        {
          id: 2,
          name: '政治',
          subCategories: [
            {
              id: 3,
              name: '国际政治'
            }
          ]
        }
      ],
      selectedCategory: [],
      selectedTags: [],
      selectedSubCategory: [],
      subCategoryOptions: []
    }
  },
  watch: {
    selectedCategory (newVal) {
      for (let i = 0; i < this.categoryOptions.length; i++) {
        if (this.categoryOptions[i].id === newVal) {
          this.subCategoryOptions = this.categoryOptions[i].subCategories
          break
        }
      }
    }
  },
  computed: {
    // subCategoryOptions () {
    //   console.log(this.selectedCategory)
    //   for (let i = 0; i < this.categoryOptions.length; i++) {
    //     if (this.categoryOptions[i] === this.selectedCategory().id) {
    //       return this.categoryOptions[i].subCategories
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
.editor-wrapper {
  display: flex
}

.editor-area {
  margin: 0 10px 0 0;
  width: 70%;
  height: 700px
}

.blog-detail-area {
  padding: 10px 20px;
  width: 30%
}

@media screen and (max-width: 600px) {
  .editor-wrapper {
    display: block;
  }

  .editor-area {
    width: 100%;
  }

  .blog-detail-area {
    width: 100%;
    margin-top: 200px;
  }
}

.blog-btn-group button {
  margin: 3px 10px;
}
</style>
