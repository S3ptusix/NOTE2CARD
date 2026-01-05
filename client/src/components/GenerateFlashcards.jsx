import { Sparkles } from "lucide-react";

export default function GenerateFlashcards() {

    return (
        <div className="mb-16 border border-gray-300 rounded-lg p-4">
            <p className="font-semibold mb-4">Generate Flashcards from Notes</p>
            <textarea
                placeholder="Paste your notes here. The system will automatically generate flashcards based on key concepts..."
                className="border border-gray-300 w-full p-4 rounded-lg h-75 mb-4 resize-none focus:outline-blue-700"
            >

            </textarea>
            <button className="btn bg-blue-600 text-white w-full rounded-lg">
                <Sparkles size={16} />
                Generate Flashcards
            </button>
        </div>
    )
}