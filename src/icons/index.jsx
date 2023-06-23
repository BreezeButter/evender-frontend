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
            width="22px"
            height="22px"
        >
            <path
                d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
                stroke="#111441"
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
            width="24px"
            height="24px"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 9a4 4 0 118 0 4 4 0 01-8 0zm7.824 4.623a6 6 0 10-7.649 0C4.986 14.746 3 17.247 3 20a1 1 0 102 0c0-2.27 2.355-5 7-5s7 2.73 7 5a1 1 0 102 0c0-2.753-1.984-5.254-5.176-6.377z"
                fill="#111441"
            />
        </svg>
    );
}

export function MessageIcon2(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(-1 1)"
            {...props}
            width="21px"
            height="21px"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 3a1 1 0 00-1 1v11a1 1 0 001 1h3a1 1 0 011 1v2.865l4.36-3.633A1 1 0 0113 16h7a1 1 0 001-1V4a1 1 0 00-1-1H4zM1 4a3 3 0 013-3h16a3 3 0 013 3v11a3 3 0 01-3 3h-6.638L7.64 22.768A1 1 0 016 22v-4H4a3 3 0 01-3-3V4z"
                fill="#111441"
            />
        </svg>
    );
}

export function SignOutIcon(props) {
    return (
        <svg
            fill="#000"
            viewBox="0 0 24 24"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
            {...props}
            width="17px"
            height="17px"
        >
            <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <path d="M18 9L21 12 18 15" />
                <path data-name="primary" d="M21 12L7 12" />
                <path
                    data-name="primary"
                    d="M14 16v3a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h9a1 1 0 011 1v3"
                />
            </g>
        </svg>
    );
}

export function LeftIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="20px"
            height="20px"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
                fill="#004DFF"
            />
        </svg>
    );
}

export function LoaderIcon({ className = null }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="2rem"
            width="2rem"
            fill="#000"
            className={className}
        >
            <g>
                <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
            </g>
        </svg>
    );
}
