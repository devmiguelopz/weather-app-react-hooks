import { React } from "react";
import WelcomeScreen from ".";
import "typeface-roboto";

const welcomeScreenComponent = {
  title: "WelcomeScreen",
  component: WelcomeScreen,
};

export default welcomeScreenComponent;

export const WelcomeScreenExample = () => (
  <>
    <WelcomeScreen>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui iusto sint minus quia tenetur, a explicabo ipsa et voluptatem aliquid?
      </div>
    </WelcomeScreen>
  </>
);
