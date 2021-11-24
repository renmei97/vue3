<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      @newBtnClick="handleNewData"
      @editeBtnClick="handleEditeData"
    ></PageContent>
    <PageModal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :pageName="pageName"
    >
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore()
    const pageName = 'users'
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editeCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === 'password'
      )
      passwordItem!.isHidden = true
    }
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.filed === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id }
        }
      )
      const roleItem = modalConfig.formItems.find(
        (item) => item.filed === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    const [pageModalRef, defaultInfo, handleNewData, handleEditeData] =
      usePageModal(newCallBack, editeCallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      pageName,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfigRef,
      handleNewData,
      handleEditeData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>
<style scoped>
.header {
  color: red;
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
