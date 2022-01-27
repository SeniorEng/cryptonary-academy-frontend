import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'
import {
  Popper,
  ClickAwayListener,
  Fade,
  Paper,
  Box,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded
} from '@mui/icons-material'
import AlphaContent from './AlphaContent'
import { useHistory } from 'react-router-dom'

const Alpha = () => {
  const classes = useStyles()
  const history = useHistory()
  const [openAlpha, setOpenAlpha] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleAlphaToggle = (e) => {
    setOpenAlpha(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  useEffect(() => {
    setOpenAlpha(false)
  }, [history.location])

  return (
    <>
      <MButton
        color='inherit'
        sx={{ color: '#858585', fontSize: '16px' }}
        endIcon={openAlpha ? <KeyboardArrowDownRounded /> : <KeyboardArrowUpRounded />}
        onClick={handleAlphaToggle}
      >
        Alpha
      </MButton>

      <Popper
        open={openAlpha}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom'
        className={classes.alphaPoper}
      >
        {({ TransitionProps }) => (
          <Fade  {...TransitionProps}>
            <Paper elevation={0}>
              <ClickAwayListener onClickAway={() => setOpenAlpha(false)}>
                <Box>
                  <AlphaContent />
                </Box>
              </ClickAwayListener>
            </Paper>
          </Fade >
        )}
      </Popper>
    </>
  )
}

export default Alpha