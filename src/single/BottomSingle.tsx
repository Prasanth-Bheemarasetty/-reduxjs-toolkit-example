import { useDispatch, useSelector } from "react-redux";
import { SingleStateType, singleStoreActions } from "./singleStore";
import "./BottomSingle.css";

export const BottomSingle = () => {
  const text = useSelector((state: SingleStateType) => state.text);

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
            dispatch(singleStoreActions.setTopRootBgColor("yellow"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            dispatch(singleStoreActions.setTopRootBgColor("green"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            dispatch(singleStoreActions.setTopRootBgColor("red"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            dispatch(singleStoreActions.setTopRootBgColor("blue"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "violet" }}
          onClick={() => {
            dispatch(singleStoreActions.setTopRootBgColor("violet"));
          }}
        />
        <div
          className="color-box"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            dispatch(singleStoreActions.setTopRootBgColor("white"));
          }}
        />
      </div>
    </div>
  );
};
