import { Plus, Trash2 } from "lucide-react";
import Topbar from "../components/Topbar";
import GenerateFlashcards from "../components/GenerateFlashcards";
import AddDeck from "../components/addDeck";
import { useState } from "react";

export default function Home() {

    const [openAddDeck, setOpenAddDeck] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Topbar />
            <div className="grow mx-[10vw] py-4">

                <GenerateFlashcards />

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <p className="font-semibold">My Decks</p>

                        <button
                            className="btn bg-blue-600 text-white"
                            onClick={() => setOpenAddDeck(true)}
                        >
                            <Plus size={16} />
                            New Deck
                        </button>
                    </div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                        <div className="border border-gray-300 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <p className="font-semibold">
                                    Title
                                </p>
                                <button
                                    className="btn btn-square btn-ghost text-red-500"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <p className="mb-4 text-gray-400">2 cards</p>
                            <div className="flex gap-4">
                                <button
                                    className="btn grow bg-blue-600 text-white"
                                >
                                    View Cards
                                </button>
                                <button
                                    className="btn btn-square border-gray-300"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openAddDeck && <AddDeck onClose={() => setOpenAddDeck(false)} />
            }
        </div>
    )
};