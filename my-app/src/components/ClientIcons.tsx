import React from 'react';
import berkeleyLogo from '../images/berkeley.png'; // Adjust the path as per your directory structure
import anotherLogo from '../images/logo192.png'; // Adjust the path as per your directory structure
import './ClientIcons.css';

const clientData = [
    { logo: berkeleyLogo, name: 'UC Berkeley' },
    { logo: anotherLogo, name: 'Another Client' }, // Add another client object
];

const ClientIcons: React.FC = () => {
    return (
        <div className="client-icons">
            <p className="client-label">Current Client</p>
            <div className="client-list">
                {clientData.map((client, index) => (
                    <div key={index} className="client-item">
                        <img
                            src={client.logo}
                            alt={`Client ${index}`}
                            className="client-logo"
                        />
                        <p className="client-name">{client.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientIcons;




