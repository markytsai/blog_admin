<template>
  <div>
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
<!--    <div class="limit">-->
<!--      当前已输入-->
<!--      <span>{{ currentChars }}</span> 个字符，您还可以输入-->
<!--      <span>{{ remainChars }}</span> 个字符。-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'RichTextEditor',
  data () {
    return {
      content: '<p>最近看了两本书，分别是《还原真实的美联储》和《金融的本质：伯南克四讲美联储》。前者的作者是王健，担任过</p>'
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    },
    // 当前已输入字符数
    currentChars () {
      return this.content.length
    },
    // 剩余可输入字符数
    remainChars () {
      const num = 10000 - Number(this.content.length)
      return num > 0 ? num : 0
    }
  },
  methods: {
    onEditorBlur () {
      console.log('blur', this.content)
    },

    onEditorFocus () {
      console.log('focus', this.content)
    },

    onEditorReady () {
      console.log('ready', this.content)
    }
  }
}
</script>

<style scoped>
.quill-editor {
  height: calc(74vh)
}

.limit {
  border: 1px solid #ccc;
  text-align: right;
}

.limit span {
  color: #ee2a7b;
}

</style>
