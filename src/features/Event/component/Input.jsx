export default function Input({
    title,
    type = "text",
    value,
    onChange,
    name,
    placeholder,
}) {
    return (
        <div>
            <h1 className="font-medium">{title}</h1>
            <input
                type={type}
                className="block rounded-lg border border-gray-400 font-normal py-2.5 focus:ring-1 w-full bg-white text-sm pl-4 mt-2"
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}
