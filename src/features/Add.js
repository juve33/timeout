import '../styles/add.css';
function Add({ name }) {
    return (
        <button
            onClick={() => { console.log('add New tasks') }}
            className="add"
        >{name}</button>
    )
}

export default Add