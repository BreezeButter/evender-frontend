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

export function SearchIcon2(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="24px"
            height="24px"
        >
            <path
                d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function UserIcon2(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="26px"
            height="26px"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 9a4 4 0 118 0 4 4 0 01-8 0zm7.824 4.623a6 6 0 10-7.649 0C4.986 14.746 3 17.247 3 20a1 1 0 102 0c0-2.27 2.355-5 7-5s7 2.73 7 5a1 1 0 102 0c0-2.753-1.984-5.254-5.176-6.377z"
                fill="#000"
            />
        </svg>
    );
}

function MessageIcon2(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(-1 1)"
            {...props}
        >
            <path
                d="M16 10h.01M12 10h.01M8 10h.01M3 10c0-5.353 2.118-7 9-7s9 1.647 9 7-2.118 7-9 7c-.34 0-.67-.004-.988-.012L7 21v-4.506C4.033 15.669 3 13.738 3 10z"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
