import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({show}) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}></div>
  )
}


export default SideDrawer;
