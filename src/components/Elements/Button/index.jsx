const Button = (props) => {
  const { text = "...", color = "slate", type = "submit", full = "w-full", onclick = () => {} } = props
  return (
    <button className={`bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${full}`} 
      type={`${type}`} onClick={onclick}>
        {text}
    </button>
  )
}

export default Button;