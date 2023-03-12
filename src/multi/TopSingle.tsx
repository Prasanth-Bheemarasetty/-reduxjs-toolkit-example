import { useDispatch, useSelector } from "react-redux";
import { MultiStateType, multiStoreActions } from "./multiStore";

export const TopSingle = () => {
  //Text and BgColor Params
  const text = useSelector((state: MultiStateType) => state.textReducer.text);
  const bgColor = useSelector(
    (state: MultiStateType) => state.topBgReducer.topBg
  );

  // Store Dispatcher
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <input
        type="text"
        value={text}
        placeholder="Enter name"
        onChange={(event) => {
          dispatch(multiStoreActions.setText(event.target.value));
        }}
      />
    </div>
  );
};
