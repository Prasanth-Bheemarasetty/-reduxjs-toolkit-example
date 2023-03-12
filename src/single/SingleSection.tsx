import { TopSingle } from "./TopSingle";
import { BottomSingle } from "./BottomSingle";
import { Provider } from "react-redux";
import { store } from "./singleStore";

export const SingleSection = () => {
  return (
    <Provider store={store}>
      <TopSingle />
      <BottomSingle />
    </Provider>
  );
};
