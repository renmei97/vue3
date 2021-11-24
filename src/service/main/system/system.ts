import hyRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData<IDataType>(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}
export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editePageData(url: string, editeData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editeData
  })
}
