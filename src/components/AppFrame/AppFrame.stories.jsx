import { React } from "react";
import AppFrame from "./AppFrame";
import "typeface-roboto";
import { BrowserRouter as Router } from "react-router-dom";

const appFrameComponent = {
  title: "AppFrame",
  component: AppFrame,
};

export default appFrameComponent;

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero neque error porro ullam exercitationem nulla sunt libero facilis, mollitia quas distinctio saepe perspiciatis delectus a repellat eveniet necessitatibus expedita non.
      </div>
    </AppFrame>
  </Router>
);
