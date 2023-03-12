import { TopSingle } from "./TopSingle";
import { BottomSingle } from "./BottomSingle";
import { Provider } from "react-redux";
import { multiStore } from "./multiStore";

export const MultiSection = () => {
  return (
    <Provider store={multiStore}>
      <TopSingle />
      <BottomSingle />
    </Provider>
  );
};
