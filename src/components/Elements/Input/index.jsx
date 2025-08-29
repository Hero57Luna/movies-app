const Input = (props) => {
    const { type = 'text', htmlFor, text, placeholder, name } = props
    return (
        <div className='mb-6'>
            <label htmlFor={`${htmlFor}`} className='block text-slate-700 text-sm font-bold mb-2'>
                {text}
            </label>
            <input type={`${type}`} className='text-sm border rounded w-full py-2 px-3 text-slate-700' placeholder={`${placeholder}`} name={`${name}`} />
        </div>
    );
}

export default Input;