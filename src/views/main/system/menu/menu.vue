<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      :page-name="pageName"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'menu',
  components: {
    PageContent
  },
  setup() {
    const pageName = 'menu'
    return {
      contentTableConfig,
      pageName
    }
  }
})
</script>

<style scoped></style>
