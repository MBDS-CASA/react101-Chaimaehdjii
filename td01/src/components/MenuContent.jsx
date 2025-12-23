import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

function MenuContent({ activeMenu, data }) {
  if (activeMenu === 'Notes') {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Notes
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="notes table">
            <TableHead>
              <TableRow>
                <TableCell>Étudiant</TableCell>
                <TableCell>Matière</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.unique_id}>
                  <TableCell>{item.student.firstname} {item.student.lastname}</TableCell>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>{item.grade}</TableCell>
                  <TableCell>{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  if (activeMenu === 'Étudiants') {
    const uniqueStudents = [...new Set(data.map(item => `${item.student.firstname} ${item.student.lastname}`))].map(name => {
      const [firstname, lastname] = name.split(' ');
      const student = data.find(item => item.student.firstname === firstname && item.student.lastname === lastname);
      return { name, id: student.student.id };
    });

    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Étudiants
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="students table">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uniqueStudents.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  if (activeMenu === 'Matières') {
    const uniqueCourses = [...new Set(data.map(item => item.course))];

    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Matières
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="courses table">
            <TableHead>
              <TableRow>
                <TableCell>Matière</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uniqueCourses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  if (activeMenu === 'À propos') {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          À propos
        </Typography>
        <Typography variant="body1">
          Ceci est une application React pour gérer les notes des étudiants.
        </Typography>
      </Box>
    );
  }

  return null;
}

export default MenuContent;