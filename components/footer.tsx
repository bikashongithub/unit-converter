export default function Footer() {
    return (
        <footer className="relative z-10 w-full py-6 px-4 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
                <div className="flex items-center ">
                    <svg
                        className="h-6 w-6 text-primary mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        UnitSwift © {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </footer>
    );
}

