import { useDispatch, useSelector } from "react-redux";
import { SingleStateType, singleStoreActions } from "./singleStore";

export const TopSingle = () => {
  //Text and BgColor Params
  const text = useSelector((state: SingleStateType) => state.text);
  const bgColor = useSelector((state: SingleStateType) => state.topBg);

  // Store Dispatcher
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <input
        type="text"
        value={text}
        placeholder="Enter name"
        onChange={(event) => {
          dispatch(singleStoreActions.setText(event.target.value));
        }}
      />
    </div>
  );
};
