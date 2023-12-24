import '../styles/checkbox.css'
function Checkbox({ value, onChange }) {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} className='checkbox-circle' />
        </label>
    );

};
export default Checkbox;