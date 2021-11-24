import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void

export function usePageModal(newCb?: CallbackFn, editeCb?: CallbackFn) {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const handleNewData = () => {
    defaultInfo.value = {}
    pageModalRef.value!.dialogVisible = true
    newCb && newCb()
  }
  const handleEditeData = (item: any) => {
    pageModalRef.value!.dialogVisible = true
    defaultInfo.value = { ...item }
    editeCb && editeCb()
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditeData]
}
