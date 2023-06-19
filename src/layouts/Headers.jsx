import { Link } from 'react-router-dom';
import { SearchIcon, MessageIcon } from '../icons';
export default function Headers() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-blue-900">
                    Evender
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <Link role="button">
                        <SearchIcon />
                    </Link>
                </div>
                <div className="form-control">
                    <Link role="button">
                        <MessageIcon />
                    </Link>
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
