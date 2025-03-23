import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { AccountCircle, Map, MusicNote, Image } from '@mui/icons-material'; // Importing MUI icons

export default function Features() {
  const [showDetails, setShowDetails] = useState(false);

  // Feature Data
  const features = [
    {
      title: 'Character Profiles and Story',
      description: 'Detailed profiles of characters, their backgrounds, and their roles in the story.',
      icon: <AccountCircle />,
    },
    {
      title: 'Interactive Map of Tokyo',
      description: 'Explore Tokyo’s locations, including Shibuya and Akihabara, with in-depth game references.',
      icon: <Map />,
    },
    {
      title: 'Persona Compendium',
      description: 'A database of all personas, their stats, abilities, and fusion methods.',
      icon: <Image />,
    },
    {
      title: 'Game Soundtrack and Media Gallery',
      description: 'Listen to the soundtrack and browse through images, videos, and fan content.',
      icon: <MusicNote />,
    },
  ];

  return (
    <div>
      <Navbar setShowDetails={setShowDetails} showDetails={showDetails} />
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Features</h1>

      {/* Feature Cards Section */}
      <Grid container spacing={4} justifyContent="center" style={{ padding: '20px' }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ border: '2px solid #111', borderRadius: '8px' }}>
              <CardMedia
                style={{
                  backgroundColor: '#f1f1f1',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {feature.icon}
              </CardMedia>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
