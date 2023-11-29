import './styles/checkbox.css'
function Checkbox({ value, onChange }) {
    return (
        <label className='che'>
            <input type="checkbox" checked={value} onChange={onChange} className='checkbox-circle' />
        </label>
    );

};
export default Checkbox;