// src/views/TeamsPage/TeamRow.jsx
import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import DeleteButton from './DeleteButton';

const TeamRow = ({ team, onDelete }) => {
    // State to hold the placement of the popover
    const [popoverPlacement, setPopoverPlacement] = useState('right');

    useEffect(() => {
        // Function to update the placement based on window width
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setPopoverPlacement('bottom');
            } else {
                setPopoverPlacement('right');
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        
        // Call it initially to set the correct placement
        handleResize();

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <OverlayTrigger
            trigger={['hover', 'focus']}
            placement={popoverPlacement}
            overlay={
                <Popover id={`popover-${team.id}`}>
                    <Popover.Header as="h3">{team.name}</Popover.Header>
                    <Popover.Body>
                        <strong>Coach:</strong> {team.coach}<br/>
                        <strong>Phone:</strong> {team.phone}<br/>
                        <img 
                            src={team.logo} 
                            alt={`${team.name} Logo`} 
                            style={{ maxWidth: '150px', height: 'auto', objectFit: 'cover' }} 
                        />
                    </Popover.Body>
                </Popover>
            }
        >
            <tr>
                <td>{team.name}</td>
                <td>{team.coach}</td>
                <td>{team.phone}</td>
                <td>{team.playerCount}</td>
                <td>
                    <i className="fas fa-edit"></i>
                    <DeleteButton teamName={team.name} onDelete={onDelete} />
                </td>
            </tr>
        </OverlayTrigger>
    );
};

export default TeamRow;

