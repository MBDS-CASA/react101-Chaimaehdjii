import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, TableSortLabel, TextField, TablePagination } from '@mui/material';

function MenuContent({ activeMenu, data }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter(item =>
    `${item.student.firstname} ${item.student.lastname}`.toLowerCase().includes(search.toLowerCase()) ||
    item.course.toLowerCase().includes(search.toLowerCase()) ||
    item.grade.toString().includes(search)
  );

  const sortedData = filteredData.sort((a, b) => {
    if (orderBy === 'student') {
      const aName = `${a.student.firstname} ${a.student.lastname}`;
      const bName = `${b.student.firstname} ${b.student.lastname}`;
      return order === 'asc' ? aName.localeCompare(bName) : bName.localeCompare(aName);
    }
    if (orderBy === 'course') {
      return order === 'asc' ? a.course.localeCompare(b.course) : b.course.localeCompare(a.course);
    }
    if (orderBy === 'grade') {
      return order === 'asc' ? a.grade - b.grade : b.grade - a.grade;
    }
    if (orderBy === 'date') {
      return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  if (activeMenu === 'Notes') {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Notes
        </Typography>
        <TextField
          label="Rechercher"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="notes table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'student'}
                    direction={orderBy === 'student' ? order : 'asc'}
                    onClick={() => handleRequestSort('student')}
                  >
                    Étudiant
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'course'}
                    direction={orderBy === 'course' ? order : 'asc'}
                    onClick={() => handleRequestSort('course')}
                  >
                    Matière
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'grade'}
                    direction={orderBy === 'grade' ? order : 'asc'}
                    onClick={() => handleRequestSort('grade')}
                  >
                    Note
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'date'}
                    direction={orderBy === 'date' ? order : 'asc'}
                    onClick={() => handleRequestSort('date')}
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.unique_id}>
                  <TableCell>{item.student.firstname} {item.student.lastname}</TableCell>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>{item.grade}</TableCell>
                  <TableCell>{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    );
  }

  // For other menus, keep simple
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