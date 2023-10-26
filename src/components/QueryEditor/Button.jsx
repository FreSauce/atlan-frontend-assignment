const Button = ({ onClick, className, disabled, text, color }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`w-24 px-5 py-2.5 text-center disabled:cursor-not-allowed focus:outline-none   
       focus:ring-2 font-medium rounded-full text-sm 
         text-white ${className}`}>
      {text}
    </button>
  )
}

export default Button
