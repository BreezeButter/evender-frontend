export default function Input2({
    title,
    type = "text",
    value,
    onChange,
    name,
    placeholder,
}) {
    return (
        <div>
            <h1 className="font-medium text-sm text-darkbluecute">{title}</h1>
            <input
                type={type}
                className="block rounded-lg border border-gray-400 font-normal py-2.5 focus:ring-1 w-full bg-transparent text-darkgraycute text-sm pl-4 mt-1 mb-3"
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}
