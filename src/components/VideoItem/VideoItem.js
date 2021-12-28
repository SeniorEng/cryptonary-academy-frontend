import React from 'react'
import { useSelector } from 'react-redux'
import vidoeItemSvg from 'assets/image/video.svg'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Link,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { currentUserSelector } from 'redux/modules/auth/selectors'

const defaultString =
  "Cold Storage is the term given to digital wallets held offline to protect cryptocurrency funds from fraudulent use by others ..."

const VideoItem = ({ post }) => {
  const currentUser = useSelector(currentUserSelector)
  const isPremium = post?.tags?.find((tag) => tag.slug === "hash-cpro")

  return (
    <Stack>
      <img src={post ? post.feature_image : vidoeItemSvg} alt='' style={{ width: '100%' }} />
      <Typography variant="subTitle3" sx={{ mt: 2, mb: 1 }}>
        <Link
          component={RouterLink}
          to={!currentUser && isPremium ? `/paywall` : `article/${post?.id}`}
          underline="hover"
          sx={{ color: "#232A45" }}
        >
          {post ? post.title : "What is Cold Storage?"}
        </Link>
      </Typography>
      <Typography variant="subTitle" sx={{ color: "#858585" }}>
        {post ? post.excerpt : defaultString}
      </Typography>

      <Stack direction="row" sx={{ mt: 3 }}>
        <MButton color='success' variant='outlined'>
          Beginner
        </MButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small">
          <BookmarkBorderRoundedIcon sx={{ fontSize: '24px' }} />
        </IconButton>
      </Stack>
    </Stack>
  )

}

export default VideoItem