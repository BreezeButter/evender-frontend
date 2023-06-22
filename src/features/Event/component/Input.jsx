export default function Input({ title, type = "text", value, onChange, name }) {
    return (
        <div>
            <h1 className="font-medium">{title}</h1>
            <input
                type={type}
                className="w-80 h-7 rounded"
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
}
