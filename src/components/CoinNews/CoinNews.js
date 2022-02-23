import React from 'react'
import moment from 'moment'
import {
  Grid,
  Stack,
  Hidden,
  Typography,
  Box,
  Divider,
  IconButton,
  CardActionArea,
} from '@mui/material'
import ShowMoreText from "react-show-more-text"
import NewsSVG from 'assets/image/news.svg'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import { LazyImage } from 'components/LazyImage'

const NEWS_DATA = [
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  },
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  },
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  },
  {
    image: <img src={NewsSVG} alt="" style={{ width: '100%', height: '100%' }} />,
    title: 'Anyone who studies Bitcoin will end up investing in it, says Scaramucci',
    content: `The cryptocurrency market has grown to become a $2.5 trillion sector.
              Scaramucci lauds Bitcoin Hedge fund investor Anthony Scaramucci believes that anyone who...`
  }
]

const CoinNews = ({ data, isGlobalSearch }) => {
  return (
    <Stack spacing={{ md: 4, xs: 2 }} sx={{ mt: 4 }}>
      {(data ? data : NEWS_DATA).map((item, index) => {
        const { image, title, excerpt, content, type, primaryTag, updatedAt } = item

        return (
          <Box key={index}>
            <Grid container spacing={{ md: 3, xs: 1 }}>
              <Grid item md={4} xs={4} order={!isGlobalSearch && { md: 1, xs: 2 }}>
                <Hidden mdDown={isGlobalSearch && true}>
                  {image ? image :
                    <CardActionArea>
                      <LazyImage src={type ? item.attributes.thumbnail.url : item.featureImage} />
                    </CardActionArea>
                  }
                </Hidden>
              </Grid>
              <Grid item md={8} xs={isGlobalSearch ? 12 : 8} order={!isGlobalSearch && { md: 2, xs: 1 }}>
                <Stack sx={{ maxWidth: 513 }}>
                  <Stack spacing={1}>
                    <Hidden mdDown={!isGlobalSearch && true}>
                      <Typography variant="subTitle4" color="#4AAF47">
                        {primaryTag ? primaryTag.name : 'Bitcoin BTC'}
                      </Typography>
                    </Hidden>

                    <Typography variant="subTitle1" color="#232A45">
                      <ShowMoreText expandByClick={false} more="">
                        {type === 'videos' ? item.attributes.title : title}
                      </ShowMoreText>
                    </Typography>

                    <Hidden mdDown={!isGlobalSearch && true}>
                      <ShowMoreText lines={1} expandByClick={false} more="">
                        {content ? content : type === 'videos' ? item.attributes.description : excerpt}
                      </ShowMoreText>
                    </Hidden>
                  </Stack>

                  {isGlobalSearch &&
                    <Box sx={{ display: 'flex', pt: 2 }}>
                      <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                        {moment(Date.now()).diff(updatedAt, 'hours')} hours ago
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <IconButton size="small">
                        <BookmarkBorderRoundedIcon />
                      </IconButton>
                    </Box>
                  }
                </Stack>
              </Grid>
            </Grid>
            {!isGlobalSearch &&
              <Hidden mdUp>
                <Stack spacing={0.5} direction="row" sx={{ mt: 2 }}>
                  <Typography variant="subTitle4" color="#4AAF47">BTC</Typography>
                  <Typography variant="subTitle4" color="#909090">/ 3h</Typography>
                </Stack>
                <Divider sx={{ mt: 2 }} />
              </Hidden>
            }
          </Box>
        )
      })}
    </Stack>
  )
}

export default CoinNews
