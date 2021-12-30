<template>
  <div class="footer">
    <div class="container" style="display: flex">
      <span>
        Copyright © 2019-2020 Mochoong. All Rights Reserved
        <a href="http://beian.miit.gov.cn/">浙 ICP 备 19045184 号</a>
      </span>
      <span class="links">
        <a href="#">关于我</a>
        <a href="#">知乎</a>
        <a href="#">微博</a>
        <a href="#">联系我</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.footer {
  color: #999;
  margin-top: 50px;
}

.container {
  padding: 12px 0;
}

.container span:first-child {
  color: white;
}

.container a {
  color: white;
}

.container span:nth-child(2) {
  /*padding-right: 0;*/
}

.links a:last-child {
  padding: 0 0 0 3px;
}

.links a {
  padding: 0 3px;
}
</style>
