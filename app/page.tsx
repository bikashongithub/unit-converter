import UnitConverter from "@/components/unit-converter";
import ThemeToggle from "@/components/theme-toggle";
import BackgroundEffect from "@/components/background-effect";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex justify-between flex-col">
            <BackgroundEffect />

            <header className="relative z-10 w-full p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <svg
                        className="h-8 w-8 text-primary mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        UnitSwift
                    </h1>
                </div>
                <ThemeToggle />
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 md:py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        Convert Units{" "}
                        <span className="text-primary">Instantly</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Fast, accurate unit conversions for length, weight, and
                        temperature
                    </p>
                </div>

                <div className="w-full max-w-xl transform scale-110 md:scale-125 transition-all duration-300">
                    <UnitConverter />
                </div>
            </main>

            <Footer />
        </div>
    );
}

// function FeatureCard({
//     icon,
//     title,
//     description,
// }: {
//     icon: string;
//     title: string;
//     description: string;
// }) {
//     return (
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//                 {icon === "ruler" && (
//                     <svg
//                         className="h-6 w-6 text-primary"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                         />
//                     </svg>
//                 )}
//                 {icon === "weight" && (
//                     <svg
//                         className="h-6 w-6 text-primary"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
//                         />
//                     </svg>
//                 )}
//                 {icon === "thermometer" && (
//                     <svg
//                         className="h-6 w-6 text-primary"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                     </svg>
//                 )}
//             </div>
//             <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
//                 {title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300">{description}</p>
//         </div>
//     );
// }

