export default function InputImage({ name, onChange }) {
    return (
        <div>
            <input
                type="file"
                onChange={onChange}
                name={name}
                className="file-input file-input-ghost file-input-bordered  file-input-md hover:border-lightbluecute cursor-pointer w-72 max-w-xs"
            />
        </div>
    );
}
