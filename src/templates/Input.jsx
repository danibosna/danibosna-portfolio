import React from 'react';

const Input = ({ tag, label, forLabel, type, name, id, autofocus, placeholder, autocomplete, required, value, cols, rows }) => {
  const input = <input type={type} name={name} id={id} autoFocus={autofocus} placeholder={placeholder} autoComplete={autocomplete} required={required} value={value} />
  const texArea = <textarea name={name} id={id} cols={cols} rows={rows}></textarea>

  return (
    <p>
      <label htmlFor={forLabel}>{label}</label>
      {tag === "textarea" ? texArea : input}
		</p>
  )
}

export default Input;