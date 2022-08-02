const Button = ({ func, txt, isDisabled, className }) => {
 return (
  <button
    className={className}
    disabled={isDisabled}
    type="button"
    onClick={ func }
  >
    { txt }
  </button>
 )
}

Button.defaultProps = {
  isDisabled: false,
}

export default Button;