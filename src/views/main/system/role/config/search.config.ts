import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '角色名称',
      //rules: [],
      placeholder: '请输入角色名称'
    },
    {
      filed: 'intro',
      type: 'input',
      label: '权限介绍',
      //rules: [],
      placeholder: '请输入权限介绍'
    },
    {
      filed: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      //rules: [],
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
