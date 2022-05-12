import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickReturn = () => history.goBack();
  return (
    <div>
      <h1>ページ1DetailAです</h1>
      <button onClick={onClickReturn}>戻る</button>
    </div>
  );
};
