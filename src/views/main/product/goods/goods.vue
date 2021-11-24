<template>
  <PageContent :contentTableConfig="contentTableConfig" :page-name="pageName">
    <template #image="scope">
      <el-image
        style="width: 60px; height: 60px"
        :src="scope.row.imgUrl"
        :preview-src-list="[scope.row.imgUrl]"
      >
      </el-image>
    </template>
  </PageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    const pageName = 'goods'
    return {
      pageName,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
