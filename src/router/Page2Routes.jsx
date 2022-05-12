import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// 配列の　中にオブジェクトが　入っている
export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // URLパラメータを扱う設定
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
