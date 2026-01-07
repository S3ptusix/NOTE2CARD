import { Sparkles } from "lucide-react";
import { useState } from "react";
import { generateFlashcard } from "../services/generateServices";
import { toast } from "react-toastify";
import Loading from "./Loading";

export default function GenerateFlashcards({ runFunction = () => { } }) {

    const [notes, setNotes] = useState('');
    const [loading, setloading] = useState(false);

    const handleSubmit = async () => {
        try {
            setloading(true);
            const { success, message } = await generateFlashcard({ notes: notes });
            if (success) {
                runFunction();
                toast.success(message);
                return

            };
            return toast.error(message);
        } catch (error) {
            console.error('Error on handleSubmit:', error);
        } finally {
            setloading(false);
        }
    }

    return (
        <div className="mb-8 border border-gray-300 rounded-lg p-4">
            <p className="font-semibold mb-4">Generate Flashcards from Notes</p>
            <textarea
                placeholder="Paste your notes here. The system will automatically generate flashcards based on key concepts..."
                className="border border-gray-300 w-full p-4 rounded-lg h-75 mb-4 resize-none focus:outline-blue-700"
                onChange={(e) => setNotes(e.target.value)}
            />
            <button
                className="flex gap-4 items-center justify-center cursor-pointer bg-blue-600 text-white w-full rounded-lg p-4"
                onClick={handleSubmit}
            >
                <Sparkles size={16} />
                Generate Flashcards
            </button>
            {loading && <Loading />}
        </div>
    )
}