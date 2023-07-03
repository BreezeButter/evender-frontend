import createClasses from "../../../utils/createClasses";

export default function RegisterInput({
    placeholder,
    value,
    onchange,
    name,
    isInvalid,
    type

}) {
    const defaultClassName =
        "block w-full rounded-lg border bg-transparent px-3 py-2 text-darkgraycute leading-6 outline-none text-sm focus:ring";
    const className = createClasses(
        defaultClassName,
        isInvalid
            ? "border-red-500 focus:ring-red-300"
            : "border-darkbluecute focus:ring-blue-300 focus:border-blue-500"
    );
    return (
        <input
            type={type ? type : "text"}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            name={name}

        />
    );
}
