import './App.css'

export default function Singer({singer}) {
    return (
        <div className="Singer">
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}