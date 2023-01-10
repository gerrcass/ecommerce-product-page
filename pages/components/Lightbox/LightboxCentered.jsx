const LightboxCentered = ({ children }) => {
    return (
        <div className="relative z-50 hidden desktop:block" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center desktop:p-0">
                    {children}
                </div>
            </div>
        </div >
    )
}

export { LightboxCentered }