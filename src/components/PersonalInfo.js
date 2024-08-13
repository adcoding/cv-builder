"use client";
import { useState } from "react";

function PersonalInfo() {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const handleSave = () => {
        console.log('saving personal info:', name, birth, location, phone, email, website);
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="date" placeholder="Date of birth" value={birth} onChange={(e) => setBirth(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="phone" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />

            <button onClick={handleSave}>save</button>
        </div>
    );
}

export default PersonalInfo;