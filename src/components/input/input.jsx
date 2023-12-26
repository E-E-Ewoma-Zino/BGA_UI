import { useEffect, useState } from "react";

export default function Input({type, value, label, id, required, handleChange }) {
	const [isInputFocused, setInputFocused] = useState(false);
  
	const handleInputFocus = () => {
	  setInputFocused(true);
	};
  
	const handleInputBlur = (e) => {
		if (e.target.value === ''){
			setInputFocused(false);
		}else{
			setInputFocused(true);
		}
	}
	useEffect(()=>{
		console.log(document.getElementById(id).value)
		if (document.getElementById(id).value === ''){
			setInputFocused(false);
		}else{
			setInputFocused(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  return (
	<div className="form-group">
	  <div className={`form-control-wrap ${isInputFocused && 'focused'}`}>
		<input
		  type={type}
		  value={value}
		  className="form-control form-control-outlined"
		  id={id}
		  onChange={(e)=> handleChange(e)}
		  required={required ? true : false}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
		/>
		<label
		  className="form-label-outlined"
		  htmlFor={id}
		>
		  {label}
		</label>
	  </div>
	</div>
  )
}
