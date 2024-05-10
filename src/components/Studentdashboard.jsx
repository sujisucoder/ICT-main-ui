import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Link, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

import proImg1 from '../images/project6.jpg';
import proImg2 from '../images/project2.jpg';
import proImg3 from '../images/project3.jpg';
import proImg4 from '../images/project4.jpg';
import proImg5 from '../images/project5.jpg';
import proImg6 from '../images/project1.jpg';

const projectsOtherData = [
  { image: proImg1, link: '/mern' },
  { image: proImg2, link: '/demo' },
  { image: proImg3, link: '/demo' },
  { image: proImg4, link: '/demo' },
  { image: proImg5, link: '/demo' },
  { image: proImg6, link: '/demo' },
];

const Studentdashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userEmail = sessionStorage.getItem('currentUser');
    if (userEmail) {
      getUser(userEmail);
    }
  }, []);

  const getUser = async (email) => {
    try {
      const user = await axiosInstance.get(`http://localhost:5000/api/student/user?email=${email}`);
      setUser(user.data);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
      setUser(null);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:5000/api/project/get');
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleSelectProject = async (project, user) => {
    try {
      const response = await axiosInstance.post('http://localhost:5000/api/studentProjects/add', {
        projectId: project._id,
        title: project.title,
        studentId: user._id,
        email: user.email,
        name: user.name,
        duration: project.duration,
        teamSize: project.teamSize,
      });
      alert(`Project added to student: ${response.data.title}`);
      navigate('/main');
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const tokenrelease = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('currentUser');
  }

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#231a6f' }}>
        <Toolbar>
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" style={{ height: "50px" }} />
          </a>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#fff' }}>
            Welcome, User
          </Typography>
          <Link component={RouterLink} to="/dashboard" color="inherit" style={{ marginRight: '25px', color: '#fff' }}>
            Project-Dashboard
          </Link>
          <Link component={RouterLink} to="/login" color="inherit" onClick={tokenrelease} style={{ color: '#fff' }}>
            Logout
          </Link>
        </Toolbar>
      </AppBar>
      <br /><br />
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card style={{ minWidth: 275, margin: 20, backgroundColor: '#231a6f', color: '#fff', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)', backgroundColor: '#0f054c' } }}>
              <img src={projectsOtherData[index].image} alt={project.title} style={{ height: 140 }} />
              <CardContent>
                <Typography style={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
                  {project.title}
                </Typography>
                <Typography style={{ fontSize: 16, marginTop: 10 }}>{project.description}</Typography>
                <Link component={RouterLink} to={projectsOtherData[index].link} style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                  Read more
                </Link>
              </CardContent>
            </Card>
            <Button variant="contained" color="primary" onClick={() => handleSelectProject(project, user)}>
              Choose Project
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Studentdashboard;
