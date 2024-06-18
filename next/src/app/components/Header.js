import Image from 'next/image';

const Header = () => {
    return (
        <nav className="fixed bg-gray-800 flex flex-col w-full mx-auto p-3 justify-center items-center">
            <ul className="flex flex-row flex-wrap gap-x-12 gap-y-2 justify-center items-center  text-gray-300 text-sm">
                <li className="flex justify-center basis-full mb-3">
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 315" className="w-10 h-10 text-gray-100">
                            <path fill="#000" d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793-27-39.033-47.633-110.3-19.928-158.406 13.763-23.89 38.36-39.017 65.056-39.405 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262" />
                            <text x="128" y="250" fill="white" fontFamily="'Source Code Pro', monospace" fontSize="128" fontWeight="bold" textAnchor="middle">NK</text>
                        </svg>
                    </a>
                </li>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
            </ul>
        </nav>
    );
};

export default Header;
