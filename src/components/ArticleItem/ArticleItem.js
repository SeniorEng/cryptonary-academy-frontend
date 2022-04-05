import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Link,
  CardActionArea,
} from '@mui/material'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { useHistory } from 'react-router-dom'
import ShowMoreText from "react-show-more-text"
import moment from 'moment'
import { LazyImage } from 'components/LazyImage'
import PremiumImg from 'assets/image/premium-icon.png'
import { BsPersonCircle, BsCalendarFill } from 'react-icons/bs'

const ArticleItem = ({ data, showPrimaryTag = true, blog, blogTo, tag }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const url = useMemo(() => {
    let articleUrl = `/article/${data?.id}`
    if (blog && blogTo) {
      articleUrl += `?blog=${blog}&blogTo=${blogTo}`
    }
    if (tag) {
      articleUrl += `&tag=${tag}`
    }
    return articleUrl
  }, [data, blog, blogTo, tag])

  const hours = useMemo(() => {
    return moment(Date.now()).diff(data.updatedAt, 'hours')
  }, [data])

  return (
    <Box sx={{ position: 'relative' }}>
      <Stack spacing={1}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={data.featureImage} />
        </CardActionArea>

        {showPrimaryTag &&
          <Typography variant="subTitle4" sx={{ color: "#4AAF47", pt: 1 }}>
            {data?.primaryTag.name}
          </Typography>
        }

        <Typography variant="subTitle3" >
          <Link
            component={'span'}
            onClick={() => history.push(url)}
            underline="hover"
            sx={{ color: "#232A45", fontSize: "20px", cursor: "pointer" }}
          >
            <ShowMoreText lines={1} expandByClick={false} more="">
              {data.title}
            </ShowMoreText>
          </Link>
        </Typography>

        <Typography variant="subTitle" sx={{ color: "#858585", height: '40px' }}>
          <ShowMoreText lines={2} expandByClick={false} more="">
            {data.excerpt}
          </ShowMoreText>
        </Typography>

        <Box sx={{ display: 'flex', pt: 2, alignItems: 'center' }}>
          {currentUser ?
            <Typography variant="subTitle4" sx={{ color: "#858585" }}>
              {hours < 48 ? `${hours} hours ago` : moment(data.updatedAt).format('YYYY-MM-DD')}
            </Typography>
            :
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BsCalendarFill color='#141414' />

              <Typography variant="subTitle4" sx={{ color: "#858585", ml: 0.5 }}>
                {moment(data.updatedAt).format('DD MM YYYY hh:mm')}
              </Typography>
            </Box>
          }
          <Box sx={{ flexGrow: 1 }} />
          {currentUser ?
            <IconButton size="small">
              <BookmarkBorderRoundedIcon />
            </IconButton>
            :
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BsPersonCircle color='#141414' />

              <Typography variant="subTitle4" sx={{ color: "#858585", ml: 0.5 }}>
                {data.primaryAuthor.name}
              </Typography>
            </Box>
          }
        </Box>
      </Stack>

      {data.isPremium &&
        <img
          src={PremiumImg}
          alt=""
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            zIndex: 1001,
          }}
        />
      }
    </Box>
  )

}

export default ArticleItem