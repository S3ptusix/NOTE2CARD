import { X } from "lucide-react";
import { useState } from "react";
import { addDeck } from "../services/deckService";
import { toast } from "react-toastify";

export default function AddDeck({ onClose }) {

    const [deckName, setDeckName] = useState('');

    const handleSubmit = async () => {
        try {
            const formatedName = deckName.trim().replace(/\s+/g, " ");
            const { success, message } = await addDeck({ deckName: formatedName });
            if (success) {
                onClose();
                return toast.success(message)

            };
            return toast.error(message, { toastId: "error-addDeck" });
        } catch (error) {
            console.log('Error on handSubmit:', error);
        }
    }

    return (
        <div className="modal-style">
            <div className="">
                <div className="modal-title">
                    <p className="font-semibold">Create New Deck</p>
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={onClose}
                    >
                        <X />
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="e.g., Biology, Spanish, Vocabulary..."
                    className="input w-full focus:outline-blue-600 mb-4"
                    onChange={(e) => setDeckName(e.target.value)}
                />
                <div className="flex gap-4">
                    <button
                        className="grow btn bg-blue-600 text-white"
                        onClick={handleSubmit}
                    >
                        Create Deck
                    </button>
                    <button
                        className="btn border-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
};