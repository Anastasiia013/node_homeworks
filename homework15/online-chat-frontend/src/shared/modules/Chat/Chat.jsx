import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const socket = io('http://localhost:3000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('newMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;

    socket.emit('chatMessage', input);
    setInput('');
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 2,
        background: 'aliceblue',
        borderRadius: '10px',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Напишите нам:
      </Typography>

      <Paper
        elevation={3}
        sx={{
          height: 300,
          overflowY: 'auto',
          p: 2,
          mb: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        {messages.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            Пока нет сообщений.
          </Typography>
        ) : (
          messages.map((msg, idx) => (
            <Typography key={idx} sx={{ mb: 1 }}>
              👤 {msg}
            </Typography>
          ))
        )}
      </Paper>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="Введите сообщение"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" onClick={handleSend} style={{ minWidth: '140px' }}>
          Отправить
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;