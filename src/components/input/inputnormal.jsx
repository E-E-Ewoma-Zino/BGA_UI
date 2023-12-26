

export default function InputNormal({type, placeholder, value, label, id, required, handleChange }) {

  return (
	
	<div className="form-group">
	<label className="form-label" htmlFor={id}>
		{label}
	</label>
	<input
		type={type}
		value={value}
		placeholder={placeholder}
		className="form-control form-control-lg"
		id={id}
		onChange={(e)=> handleChange(e)}
		required={required ? true : false}
	/>
</div>
  )
}
