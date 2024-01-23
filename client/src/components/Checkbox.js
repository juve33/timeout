import './Checkbox.css'
function Checkbox({ value, onChange }) {
    return (
      <input type="checkbox" checked={value} onChange={onChange} title={value ? 'Uncheck' : 'Check'} />
    );

};
export default Checkbox;
