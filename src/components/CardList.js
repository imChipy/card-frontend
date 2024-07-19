import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

const CardList = ({ cardType, apiUrl }) => {
    const [cards, setCards] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        // Fetch cards based on apiUrl prop
        axios.get(apiUrl)
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error(`Error fetching ${cardType} cards:`, error);
            });
    }, [apiUrl, cardType]);

    const handleOpen = (card) => {
        setSelectedCard(card);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCard(null);
    };

    return (
        <div>
            <h1 style={{ color: 'white' }}>{cardType} Cards</h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {cards.map(card => (
                    <Card key={card.id} style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => handleOpen(card)}>
                        <CardMedia
                            component="img"
                            image={`${card.image}`}
                            alt={card.name}
                            style={{ maxWidth: '200px', margin: '0 auto' }}
                        />
                    </Card>
                ))}
            </div>

            {selectedCard && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="card-details-title"
                    aria-describedby="card-details-description"
                >
                    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                        <Typography id="card-details-title" variant="h4" component="h2" gutterBottom>
                            {selectedCard.name}
                        </Typography>
                        {cardType === "One Piece" && (
                            <>
                                <Typography>Name: {selectedCard.card_name}</Typography>
                                <Typography>Cost: {selectedCard.cost}</Typography>
                                <Typography>Power: {selectedCard.power}</Typography>
                                <Typography>Card ID: {selectedCard.card_id}</Typography>
                                <Typography>Counter: {selectedCard.counter}</Typography>
                                <Typography>Effect: {selectedCard.effect}</Typography>
                                <Typography>Color: {selectedCard.color}</Typography>
                                <Typography>Type: {selectedCard.type}</Typography>
                            </>
                        )}
                        {cardType === "Fusion World" && (
                            <>
                                <Typography>Name: {selectedCard.card_name}</Typography>
                                <Typography>Cost: {selectedCard.cost}</Typography>
                                <Typography>Power: {selectedCard.power}</Typography>
                                <Typography>Card ID: {selectedCard.card_id}</Typography>
                                <Typography>Combo: {selectedCard.counter}</Typography>
                                <Typography>Effect: {selectedCard.effect}</Typography>
                                <Typography>Color: {selectedCard.color}</Typography>
                                <Typography>Type: {selectedCard.type}</Typography>
                            </>
                        )}
                        <CardMedia
                            component="img"
                            image={`${selectedCard.image}`}
                            alt={selectedCard.name}
                            style={{ maxWidth: '200px', margin: '0 auto' }}
                        />
                        <Button onClick={handleClose} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                            Close
                        </Button>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default CardList;
