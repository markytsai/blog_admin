<template>
  <div class="footer container container--fluid">
      <span class="links">
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.footer {
  background-color: gray;
  position: fixed;
  bottom: 0;
}

.container span:first-child {
  color: #ffffff80;
}

.container a {
  color: #ffffff80;
}

.links {
  font-size: 12px;
}

.links a {
  font-size: 12px;
  margin: 0 3px;
  text-decoration: none;
}
</style>
