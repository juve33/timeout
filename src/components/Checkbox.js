import './checkbox.css'
function Checkbox({ value, onChange }) {
    return (
      <input type="checkbox" checked={value} onChange={onChange} className='checkbox-circle' />
    );

};
export default Checkbox;
