import Button from "../Button/Button.js";
import "./Buttons.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Buttons = () => {
  return (
    <div className="buttonContainer">
      <div className="box1">
        <Button content="Default" labelText="<Button />" />
        <Button
          content="Default"
          labelText="&:hover, &:active"
          labelClass="labelHover"
          style={{ backgroundColor: "#888" }}
        />
        <Button
          content="Default"
          labelText="<Button variant='outlined' />"
          style={{
            backgroundColor: "transparent",
            color: "#2962ff",
            border: "1px solid #2962ff"
          }}
        />
        <Button
          content="Default"
          labelText="&:hover, &:active"
          labelClass="labelHover"
          style={{
            backgroundColor: "#eaefff",
            color: "#2962ff",
            border: "1px solid #2962ff"
          }}
        />
        <Button
          content="Default"
          labelText="<Button variant='text' />"
          style={{
            backgroundColor: "transparent",
            color: "#2962ff"
          }}
        />
        <Button
          content="Default"
          labelText="&:hover, &:active"
          labelClass="labelHover"
          style={{
            backgroundColor: "#eaefff",
            color: "#2962ff"
          }}
        />
      </div>
      <div className="box2">
        <Button
          content="Default"
          labelText="<Button disableShadow />"
          style={{ color: "#fff", backgroundColor: "#2962ff" }}
        />
      </div>
      <div className="box3">
        <Button
          content="Default"
          labelText="<Button disabled />"
          style={{ textDecoration: "disabled", backgroundColor: "#EEEEE" }}
          disabled
        />
        <Button
          content="Default"
          labelText="<Button variant='text' disabled />"
          style={{ textDecoration: "disabled", backgroundColor: "transparent" }}
          disabled
        />
      </div>
      <div className="box4">
        <Button
          content="Default"
          iconStart={<AddShoppingCartIcon />}
          labelText='<Button startIcon="local_grocery_store" />'
          buttonClass="iconLeft"
          style={{ color: "#fff", backgroundColor: "#2962ff" }}
        />
        <Button
          content="Default"
          iconEnd={<AddShoppingCartIcon />}
          labelText='<Button endIcon="local_grocery_store" />'
          buttonClass="iconRight"
          style={{ color: "#fff", backgroundColor: "#2962ff" }}
        />
      </div>
      <div className="box5">
        <Button
          content="Default"
          labelText='<Button size="sm"/>'
          style={{
            backgroundColor: "#2962ff",
            color: "#fff",
            padding: "0.3rem 0.8rem"
          }}
        />
        <Button
          content="Default"
          labelText='<Button size="md"/>'
          style={{ backgroundColor: "#2962ff", color: "#fff" }}
        />
        <Button
          content="Default"
          labelText='<Button size="lg"/>'
          style={{
            backgroundColor: "#2962ff",
            color: "#fff",
            padding: "0.7rem 1.3rem"
          }}
        />
      </div>
      <div className="box6">
        <Button content="Default" labelText='<Button color="default" />' />
        <Button
          content="Default"
          labelText='<Button color="primary" />'
          style={{ backgroundColor: "#2962ff", color: "#fff" }}
        />
        <Button
          content="Secondary"
          labelText='<Button color="secondary" />'
          style={{ color: "#fff", backgroundColor: "#455a64" }}
        />
        <Button
          content="Danger"
          labelText='<Button color="danger" />'
          style={{ color: "#fff", backgroundColor: "#d32f2f" }}
        />
        <Button
          content="Default"
          labelText="&:hover, &:focus"
          labelClass="labelHover"
          style={{ backgroundColor: "#888" }}
        />
        <Button
          content="Default"
          style={{
            backgroundColor: "#0039cb",
            color: "#fff",
            marginTop: "1rem"
          }}
        />
        <Button
          content="Secondary"
          style={{
            backgroundColor: "#1c313a",
            color: "#fff",
            marginTop: "1rem"
          }}
        />
        <Button
          content="Danger"
          style={{
            backgroundColor: "#9a0007",
            color: "#fff",
            marginTop: "1rem"
          }}
        />
      </div>
      <p className="iconsResources">
        Icons:{" "}
        <a href="https://material.io/resources/icons/?style=round">
          https://material.io/resources/icons/?style=round
        </a>
      </p>
      <p className="devLink">
        created by{" "}
        <a href="https://devchallenges.io/portfolio/thisisnadya">thisisnadya</a>{" "}
        - devchallenges.io
      </p>
    </div>
  );
};
export default Buttons;
