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

export function LocationPin(props) {
    return (
        <svg
            fill="#757575"
            width="25px"
            height="25px"
            viewBox="-3.2 -3.2 38.40 38.40"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#757575"
            {...props}
        >
            <path d="M16.114-.011C9.555-.011 4 5.576 4 12.193c0 6.93 6.439 14.017 10.77 18.998.017.02.717.797 1.579.797h.076c.863 0 1.558-.777 1.575-.797 4.064-4.672 10-12.377 10-18.998C28 5.575 23.667-.011 16.114-.011zm.401 29.86a1.211 1.211 0 01-.131.107 1.218 1.218 0 01-.133-.107l-.523-.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zm-.48-23.805a6 6 0 100 12 6 6 0 000-12zm0 10c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 .001 2.206-1.747 4.044-3.954 4.044z" />
        </svg>
    );
}

export function ClockIcon(props) {
    return (
        <svg
            width="40px"
            height="40px"
            viewBox="-3.2 -3.2 38.40 38.40"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke="#757575"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <path d="M11.9 5.9L11.9 11.9 12 12 14.1 14.1" />
                <circle cx={12} cy={12} data-name="Circle" r={10} />
            </g>
        </svg>
    );
}
