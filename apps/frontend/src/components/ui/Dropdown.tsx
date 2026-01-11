// import React, { useState, useRef, useEffect } from "react";
// import "./Dropdown.css";

// interface DropdownItem {
//     label: string;
//     description?: string;
// }

// interface DropdownProps {
//     label: string;
//     items: DropdownItem[];
//     onSelect: (label: string, description?: string) => void;
//     disabled?: boolean;
// }

// const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect, disabled }) => {
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [searchTerm, setSearchTerm] = useState<string>("");
//     const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>(items);
//     const [activeIndex, setActiveIndex] = useState<number>(-1);
//     const [selectedLabel, setSelectedLabel] = useState<string>(label);
//     const [editingDescriptionIndex, setEditingDescriptionIndex] = useState<number | null>(null);
//     const [descriptionInput, setDescriptionInput] = useState<string>("");

//     const dropdownRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         setDropdownItems(items);
//     }, [items]);

//     useEffect(() => {
//         setSelectedLabel(label);
//     }, [label]);

//     const toggleDropdown = () => {
//         if (!disabled) {
//             setIsOpen((prev) => !prev);
//             setSearchTerm("");
//             setActiveIndex(-1);
//             setEditingDescriptionIndex(null);
//         }
//     };

//     const filteredItems = dropdownItems.filter((item) =>
//         item.label.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === "ArrowDown") {
//             setActiveIndex((prevIndex) => (prevIndex < filteredItems.length - 1 ? prevIndex + 1 : 0));
//         } else if (event.key === "ArrowUp") {
//             setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredItems.length - 1));
//         } else if (event.key === "Enter") {
//             if (activeIndex >= 0) {
//                 const selectedItem = filteredItems[activeIndex];
//                 setSelectedLabel(selectedItem.label);
//                 setEditingDescriptionIndex(activeIndex);
//                 setDescriptionInput(selectedItem.description || "");
//             } else if (searchTerm.trim()) {
//                 const newItem: DropdownItem = {
//                     label: searchTerm,
//                 };
//                 setDropdownItems((prevItems) => [newItem, ...prevItems]);
//                 onSelect(searchTerm, undefined);
//                 setSelectedLabel(searchTerm);
//                 setIsOpen(false);
//                 setSearchTerm("");
//                 setActiveIndex(-1);
//             }
//         }
//     };

//     const saveDescription = (index: number) => {
//         setDropdownItems((prevItems) =>
//             prevItems.map((itm, idx) => (idx === index ? { ...itm, description: descriptionInput } : itm))
//         );
//         setEditingDescriptionIndex(null);
//         onSelect(dropdownItems[index].label, descriptionInput);
//     };

//     return (
//         <div className="dropdown flex-[10_0_0%]" ref={dropdownRef}>
//             <button
//                 className={`h-full dropdown-button ${disabled ? 'disabled' : ''}`}
//                 onClick={toggleDropdown}
//                 aria-haspopup="true"
//                 aria-expanded={isOpen}
//                 disabled={disabled}
//             >
//                 {selectedLabel} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
//             </button>

//             {isOpen && (
//                 <div className="dropdown-content">
//                     <input
//                         type="text"
//                         className="dropdown-search"
//                         placeholder="Type to search or add..."
//                         value={searchTerm}
//                         onChange={(e) => {
//                             setSearchTerm(e.target.value);
//                             setActiveIndex(-1);
//                         }}
//                         onKeyDown={handleInputKeyDown}
//                         autoFocus
//                     />

//                     <ul className="dropdown-menu" role="menu">
//                         {filteredItems.length > 0 ? (
//                             filteredItems.map((item, index) => (
//                                 <li key={index} role="none" className={`dropdown-item-container ${activeIndex === index ? "active" : ""}`}>
//                                     <div className="dropdown-item-wrapper">
//                                         <button
//                                             className="add-description"
//                                             onClick={(e) => {
//                                                 e.stopPropagation();
//                                                 setEditingDescriptionIndex(editingDescriptionIndex === index ? null : index);
//                                                 setDescriptionInput(item.description || "");
//                                             }}
//                                             aria-label={`Add description to ${item.label}`}
//                                         >
//                                             +
//                                         </button>

//                                         <button
//                                             className="dropdown-item"
//                                             role="menuitem"
//                                             onClick={() => {
//                                                 setSelectedLabel(item.label);
//                                                 onSelect(item.label, item.description);
//                                                 setIsOpen(false);
//                                                 setSearchTerm("");
//                                                 setActiveIndex(-1);
//                                             }}
//                                         >
//                                             {item.label}
//                                         </button>

//                                         <button
//                                             className="remove-item"
//                                             onClick={(e) => {
//                                                 e.stopPropagation();
//                                                 setDropdownItems((prevItems) =>
//                                                     prevItems.filter((i) => i.label !== item.label)
//                                                 );
//                                                 if (selectedLabel === item.label) {
//                                                     setSelectedLabel(label);
//                                                     onSelect(label);
//                                                 }
//                                                 if (editingDescriptionIndex === index) {
//                                                     setEditingDescriptionIndex(null);
//                                                 }
//                                             }}
//                                             aria-label={`Remove ${item.label}`}
//                                         >
//                                             ✕
//                                         </button>
//                                     </div>

//                                     {editingDescriptionIndex === index && (
//                                         <div className="description-editor">
//                                             <input
//                                                 type="text"
//                                                 className="description-input"
//                                                 value={descriptionInput}
//                                                 onChange={(e) => setDescriptionInput(e.target.value)}
//                                             />
//                                             <button
//                                                 className="save-description"
//                                                 onClick={() => saveDescription(index)}
//                                                 aria-label="Save description"
//                                             >
//                                                 Save
//                                             </button>
//                                         </div>
//                                     )}
//                                 </li>
//                             ))
//                         ) : (
//                             <li className="no-items" role="none">No items found</li>
//                         )}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;

import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

interface DropdownItem {
    label: string;
    description?: string;
}

interface DropdownProps {
    label: string;
    items: DropdownItem[];
    onSelect: (label: string, description?: string) => void;
    disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect, disabled }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>(items);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [selectedLabel, setSelectedLabel] = useState<string>(label);
    const [editingDescriptionIndex, setEditingDescriptionIndex] = useState<number | null>(null);
    const [descriptionInput, setDescriptionInput] = useState<string>("");

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDropdownItems(items);
    }, [items]);

    useEffect(() => {
        setSelectedLabel(label);
    }, [label]);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen((prev) => !prev);
            setSearchTerm("");
            setActiveIndex(-1);
            setEditingDescriptionIndex(null);
        }
    };

    const filteredItems = dropdownItems.filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowDown") {
            setActiveIndex((prevIndex) => (prevIndex < filteredItems.length - 1 ? prevIndex + 1 : 0));
        } else if (event.key === "ArrowUp") {
            setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredItems.length - 1));
        } else if (event.key === "Enter") {
            if (activeIndex >= 0) {
                const selectedItem = filteredItems[activeIndex];
                setSelectedLabel(selectedItem.label);
                setEditingDescriptionIndex(activeIndex);
                setDescriptionInput(selectedItem.description || "");
            } else if (searchTerm.trim()) {
                const newItem: DropdownItem = {
                    label: searchTerm,
                };
                setDropdownItems((prevItems) => [newItem, ...prevItems]);
                onSelect(searchTerm, undefined);
                setSelectedLabel(searchTerm);
                setIsOpen(false);
                setSearchTerm("");
                setActiveIndex(-1);
            }
        }
    };

    const saveDescription = (index: number) => {
        setDropdownItems((prevItems) => prevItems.map((itm, idx) => (idx === index ? { ...itm, description: descriptionInput } : itm)));
        setEditingDescriptionIndex(null);
        onSelect(dropdownItems[index].label, descriptionInput);
    };

    return (
        <div className="dropdown flex-[10_0_0%]" ref={dropdownRef}>
            <button className={`h-full dropdown-button ${disabled ? "disabled" : ""}`} onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen} disabled={disabled}>
                {selectedLabel} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
                <div className="dropdown-content">
                    <input
                        type="text"
                        className="dropdown-search"
                        placeholder="Type to search or add..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setActiveIndex(-1);
                        }}
                        onKeyDown={handleInputKeyDown}
                        autoFocus
                    />

                    <ul className="dropdown-menu" role="menu">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <li key={index} role="none" className={`dropdown-item-container ${activeIndex === index ? "active" : ""}`}>
                                    <div className="dropdown-item-wrapper">
                                        <button
                                            className="add-description"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setEditingDescriptionIndex(editingDescriptionIndex === index ? null : index);
                                                setDescriptionInput(item.description || "");
                                            }}
                                            aria-label={`Add description to ${item.label}`}
                                        >
                                            +
                                        </button>

                                        <button
                                            className="dropdown-item"
                                            role="menuitem"
                                            onClick={() => {
                                                setSelectedLabel(item.label);
                                                onSelect(item.label, item.description);
                                                setIsOpen(false);
                                                setSearchTerm("");
                                                setActiveIndex(-1);
                                            }}
                                        >
                                            {item.label}
                                        </button>

                                        <button
                                            className="remove-item"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDropdownItems((prevItems) => prevItems.filter((i) => i.label !== item.label));
                                                if (selectedLabel === item.label) {
                                                    console.log("Ljflajsdlfjladsjf")
                                                    setSelectedLabel(label);
                                                    onSelect(label);
                                                    return ;
                                                }
                                                if (editingDescriptionIndex === index) {
                                                    setEditingDescriptionIndex(null);
                                                }
                                            }}
                                            aria-label={`Remove ${item.label}`}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    {editingDescriptionIndex === index && (
                                        <div className="description-editor">
                                            <input type="text" className="description-input" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                                            <button className="save-description" onClick={() => saveDescription(index)} aria-label="Save description">
                                                Save
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))
                        ) : (
                            <li className="no-items" role="none">
                                No items found
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
