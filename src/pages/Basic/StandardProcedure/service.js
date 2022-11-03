/*
 * @Author: zp
 * @Date:   2020-02-02 11:57:24
 * @Last Modified by: zp
 * @Last Modified time: 2020-04-23 09:48:33
 */
import { utils } from 'suid';
import { constants } from '@/utils';

const { request } = utils;
const { PROJECT_PATH } = constants;
// const MockServerPath = 'http://rddgit.changhong.com:7300/mock/5e02d29836608e42d52b1d81/template-service';
const serverPath = `${PROJECT_PATH}`;
const contextPath = '/apsProcess';
const globalUrl = `${serverPath}${contextPath}`;

/** 保存 */
export async function save(data) {
  const url = `${globalUrl}/save`;

  return request.post(url, data);
}

/** 删除 */
export async function del(params) {
  const url = `${globalUrl}/delete/${params.id}`;
  return request.delete(url);
}
