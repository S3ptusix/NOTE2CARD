import { BookOpen } from "lucide-react";

export default function Topbar() {
    return (
        <div className="mx-[10vw] py-4">
            <div className="flex gap-2 text-blue-600 items-center">
                <BookOpen />
                <p className="font-semibold text-lg">NOTE2CARD</p>
            </div>
        </div>
    )
};