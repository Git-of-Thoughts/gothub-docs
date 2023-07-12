import React from 'react';
import berkeleyLogo from '../images/berkeley.png'; // Adjust the path as per your directory structure
import anotherLogo from '../images/logo192.png'; // Adjust the path as per your directory structure
import './ClientIcons.css';

const clientData = [
    { logo: berkeleyLogo, name: 'Berkeley Wireless Research Center', url: 'https://bwrc.eecs.berkeley.edu/' },
    { logo: anotherLogo, name: 'Another Client', url: 'https://www.example.com' }, // Add another client object with the URL
];

const ClientIcons: React.FC = () => {
    return (
        <div className="client-icons">
            <p className="client-label">Current Clients From:</p>
            <div className="client-list">
                {clientData.map((client, index) => (
                    <a key={index} href={client.url} target="_blank" rel="noopener noreferrer" className="client-item">
                        <img src={client.logo} alt={`Client ${index}`} className="client-logo" />
                        <p className="client-name">{client.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ClientIcons;




