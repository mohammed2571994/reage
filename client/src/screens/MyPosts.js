import { useState } from 'react';
import {CircularProgress, Grid, Container, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import axios from 'axios';
import { MainLayout } from '../layouts'
import { useEffect } from 'react';
import { Post, NoPost } from '../components';
import Auth from '../Auth';

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Auth.init();
    init();
  }, []);

  useEffect(() => {
  }, [loading]);

  const init = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/me`);

      setPosts(result.data.posts)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const render = loading
    ? <CircularProgress />
    : (
      <MainLayout>
        {
          posts.length > 0
            ? (

              <Container>
                <Fab color="primary" 
                aria-label="أضف منشورا" 
                onClick={() => props.history.push('/posts/add')}
                sx={{
                  position: 'fixed',
                  bottom: 16,
                  left: 16,
                }}>
                  <Add />
                </Fab>

                <Grid container spacing={1} >
                  {
                    posts.map(p => (
                      <Grid item xs={12} md={6} lg={4} key={p.img}>
                        <Post title={p.title} image={p.image} body={p.body} postId={p._id} />
                      </Grid>
                    ))
                  }
                </Grid>
              </Container>
            ) 
            :
            <NoPost message='post.profileNoPosts' />
        }
      </MainLayout>
    )

  return render;
}