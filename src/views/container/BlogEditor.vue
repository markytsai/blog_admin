<template>
  <div style="display: flex">
    <div class="editor-area" style="width: 70%; height: 700px">
      <RichTextEditor/>
    </div>
    <div class="blog-detail-area" style="width: 30%">
      aaaa
    </div>
  </div>
</template>

<script>
import RichTextEditor from '@/views/RichTextEditor'

export default {
  name: 'BlogEditor',
  components: { RichTextEditor }
}
</script>

<style scoped>
.editor-area {
  margin: 0 10px 0 0;
}

.blog-detail-area {
  background-color: #80808033;
}
</style>
