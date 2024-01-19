import React, { useState } from 'react';

function RobotForm({ onAdd }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [mass, setMass] = useState('');

  const handleSubmit = () => {
    const robot = {
      name,
      type,
      mass: parseInt(mass, 10) >= 500 ? mass : ''
    };
    onAdd(robot);
    // Reset the form
    setName('');
    setType('');
    setMass('');
  };

  return (
    <div>
      <input id="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
      <input id="type" placeholder="type" value={type} onChange={e => setType(e.target.value)} />
      <input id="mass" placeholder="mass" value={mass} onChange={e => setMass(e.target.value)} />
      <button onClick={handleSubmit}>add</button>
    </div>
  );
}

export default RobotForm;
