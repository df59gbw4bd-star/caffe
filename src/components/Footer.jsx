export default function Footer() {
    return (
        <footer className="bg-[#1b0802] text-white">
            <div className="mx-auto max-w-[1200px] px-5 py-12">

                <div className="flex flex-col justify-between gap-10 md:flex-row">

                    <div className="flex flex-col gap-6">

                        <h2 className="text-2xl font-bold text-[#FF612E]">
                            pizzashop
                        </h2>

                        <a href="tel:+79373335533"
                            className="text-sm text-white transition hover:text-[#рррр]" >
                            +7 (937) 333-55-33
                        </a>

                    </div>

                    <div>
                        <h3 className="mb-5 font-semibold text-[#A3A3A3]">
                            Home
                        </h3>

                        <ul className="flex flex-col gap-4 text-sm text-gray-400">

                            <li>
                                <a href="#events" className="hover:text-[#515151]">
                                    Events
                                </a>
                            </li>

                            <li>
                                <a href="#events" className="hover:text-[#515151]">
                                    3 Pizza 1 Free Coffee
                                </a>
                            </li>

                            <li>
                                <a href="#events" className="hover:text-[#515151]">
                                    2 Pizza for 1 Price
                                </a>
                            </li>

                            <li>
                                <a href="#events" className="hover:text-[#515151]">
                                    Kitchen Tour
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 font-semibold text-[#A3A3A3]">
                            To Order
                        </h3>

                        <ul className="flex flex-col gap-4 text-sm text-gray-400">

                            <li>
                                <a href="/about" className="hover:text-[##]">
                                    About us
                                </a>
                            </li>

                            <li>
                                <a href="#events" className="hover:text-[#515151]">
                                    Events
                                </a>
                            </li>

                            <li>
                                <a href="/menu" className="hover:text-[#515151]">
                                    Menu
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="flex items-start gap-5">

                        <a
                            href="https://www.instagram.com/"
                            aria-label="Instagram"
                            className="text-[#FF612E] transition hover:scale-110"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com/"
                            aria-label="Twitter"
                            className="text-[#FF612E] transition hover:scale-110"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="currentColor"
                            >
                                <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2.5 19a11.8 11.8 0 0 0 18.2-10c0-.2 0-.4-.1-.6A8.5 8.5 0 0 0 22 5.9Z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.facebook.com/"
                            aria-label="Facebook"
                            className="text-[#FF612E] transition hover:scale-110"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="currentColor"
                            >
                                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.8v8h3.3Z" />
                            </svg>
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
}