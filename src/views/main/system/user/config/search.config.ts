import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      filed: 'id',
      type: 'input',
      label: 'id',
      //rules: [],
      placeholder: '请输入id'
    },
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      //rules: [],
      placeholder: '请输入用户名'
    },
    {
      filed: 'realname',
      type: 'input',
      label: '真实姓名',
      //rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      filed: 'cellphone',
      type: 'input',
      label: '电话号码',
      //rules: [],
      placeholder: '请输入电话号码'
    },
    {
      filed: 'enable',
      type: 'select',
      label: '用户状态',
      //rules: [],
      placeholder: '请选择用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      filed: 'createAt',
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
