import "./Button.css";

const Button = ({ style, ...props }) => {
  return (
    <div className="box">
      <span className={props.labelClass}>{props.labelText}</span>
      <button
        disabled={props.disabled}
        className={props.buttonClass}
        style={style}
      >
        {props.iconStart}
        {props.content}
        {props.iconEnd}
      </button>
    </div>
  );
};

export default Button;
