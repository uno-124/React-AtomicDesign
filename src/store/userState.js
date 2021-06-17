import { atom } from "recoil";

export const userState = atom({
  key: "userState", // 一意となるキー
  default: { isAdmin: false } // 初期値
});
