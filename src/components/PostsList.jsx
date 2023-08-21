import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/postSlice'
import PostItem from './PostItem'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PostsList = () => {
  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
   <>
   {posts.length ? (
    <div className='list'>
        {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
      ) : (<Box sx={{ display: 'flex' }}>
      <CircularProgress />
      </Box>
      ) 
      }
   </>
  )
}

export default PostsList