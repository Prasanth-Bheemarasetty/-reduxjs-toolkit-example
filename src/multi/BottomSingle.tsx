import { useDispatch, useSelector } from "react-redux";
import "./BottomSingle.css";
import { MultiStateType, multiStoreActions } from "./multiStore";

export const BottomSingle = () => {
  const text = useSelector((state: MultiStateType) => state.textReducer.text);

  // Store Dispatcher
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px" }}>
      <p>Hi {text}</p>
      <h6> Change Text colors</h6>
      <div
        className="colors"
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="color-box"
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            dispatch(multiStoreActions.setTopRootBgColor("yellow"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            dispatch(multiStoreActions.setTopRootBgColor("red"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            dispatch(multiStoreActions.setTopRootBgColor("green"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            dispatch(multiStoreActions.setTopRootBgColor("blue"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "violet" }}
          onClick={() => {
            dispatch(multiStoreActions.setTopRootBgColor("violet"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            dispatch(multiStoreActions.setTopRootBgColor("white"));
          }}
        />
      </div>
    </div>
  );
};
