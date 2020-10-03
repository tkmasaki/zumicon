/**
 * API 呼び出し共通処理
 */
import axios from 'axios';

// ユーザ情報
export type UserInfoType = {
  user: string,
  user_info: "",
  tag_history: string[],
  bot: false
}
export const UserGetURL = 'http://13.231.69.127:3000/api/v1/user';
// NOTE: 何か追加するときはURLと返却値の型は一緒に定義しましょう

export default class {
  getUserData = async (userId: string) => {
    try {
      console.log(userId);
      const response = await axios.get(`${UserGetURL}?user=${userId}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return '';
    }
  }
}