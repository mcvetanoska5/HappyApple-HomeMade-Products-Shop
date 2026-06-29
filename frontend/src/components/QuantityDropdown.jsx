import { useState, useEffect } from "react";

const quantities = Array.from({ length: 100 }, (_, i) => i + 1);

export const QuantityDropdown = ({ initial = 1, onChange }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(initial);

    // Update selected if initial prop changes
    useEffect(() => {
        setSelected(initial);
    }, [initial]);

    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="relative w-24">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full border border-slate-300 rounded-md py-3 px-3 text-left flex justify-between items-center"
            >
                <span>{selected}</span>
                <svg
                    className={`w-4 h-4 ml-2 transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            {open && (
                <div
                    className="absolute z-10 mt-1 w-full bg-white border border-slate-300 rounded-md max-h-40 overflow-y-auto shadow-lg">
                    {quantities.map(q => (
                        <div
                            key={q}
                            onClick={() => handleSelect(q)}
                            className="px-3 py-2 hover:bg-slate-100 cursor-pointer"
                        >
                            {q}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};