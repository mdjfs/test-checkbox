import { CheckboxProps } from "./types";
import './Checkbox.css'

export default function Checkbox ({ value, checked, onClick }: CheckboxProps) {
    return <div className={`checkbox-item ${checked ? 'checked' : ''}`} onClick={onClick}>
        <label htmlFor={value}>{value}</label>
        <input id={value} value={value} checked={checked} type="checkbox" /> 
    </div>
}