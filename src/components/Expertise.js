"use client";
import { useState } from "react";

function Expertise() {
    const [expertise, setExpertise] = useState('');

    const handleSave = () => {
        console.log('expertie saved:', expertise);
    };

    return (
        <div>
            <h2>Expertise</h2>
            <textarea placeholder="lorem ipsum dolor sit amet" value={expertise} onChange={(e) => setExpertise(e.target.value)} />

            <button onClick={handleSave}>save</button>
        </div>
    );
}

export default Expertise;