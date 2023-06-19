export function SearchIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="25px"
            height="25px"
        >
            <g stroke="#323232" strokeWidth={2}>
                <path
                    d="M15 15l6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </g>
        </svg>
    );
}

export function PersonIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="25px"
            height="25px"
        >
            <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
            </g>
        </svg>
    );
}

export function MessageIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="25px"
            height="25px"
        >
            <path
                d="M12 3c-6.882 0-9 1.647-9 7 0 3.738 1.033 5.67 4 6.494V21l4.012-4.012c.318.008.647.012.988.012 6.882 0 9-1.647 9-7s-2.118-7-9-7z"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
