export default function Footer() {
    return (
        <footer className="bg-black/80 border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center text-center sm:text-left flex-col sm:flex-row">
                    <div>
                        <p className="text-white/70 text-base">
                            &copy; {new Date().getFullYear()} TCS NQT Preparation Platform. All rights reserved.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <p className="text-white/50 text-sm">
                            Not officially affiliated with TCS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
