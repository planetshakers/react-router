import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// 配列の　中にオブジェクトが　入っている
export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
