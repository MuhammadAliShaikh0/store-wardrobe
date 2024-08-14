import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const pages = ['HOME', 'ALL PRODUCTS', 'ABOUT US'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            style={{ zIndex: 2 }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAA8CAMAAAA5dyoZAAAAFVBMVEX///////////////////////////9nSIHRAAAABnRSTlOx7m4AOhdVV2VxAAADGklEQVRo3sVa25bEIAgLAfv/n7wPM512q1x03LM+tlZDgFhFqNOaEQAA0pr+Y8PwqREix9lEQPPsiFvWqeXvMYJ3gbsaOGLSRl1vH6mqKv0OpqoK97WMEBq8SWWEkSFCS6yAqqr537P3ckM0obB3s6QUxhRFU0rrEDJ22nHAJkgUK1AUDcBnpsQEejQiniClUDIXzAH8fHcL3BBATlESxTeEJketodVIpBYospQKTAPsINpamlSU5o6w1QF2jkagNMkgWQxcCIsxOIY4tC5VGot5OSk8Ec4BvAx0FeelNPxSaS6EnAT4BhCQmKWJtMJqcyGcCsKRn/lHSvNBiGO+MUwWfrkg4/ffly0AfJBof6M0J8IVCmMSdynNG6HJsYFE+QuleSPksdbMS5aa0qDoHqwkciLbKClNdWCs5Unnixtnr+fYoTQvhJGTRaTs5s+c/DJNnqt+YAystUYUs/mctKQ0UQw8DXf7fnq6uY7h3zYrFLGqYqrw5r9Fmdtl9LedLqMWrzby3FCChSBjdbDzu4xC1ClUoJTxpYhRk81KEyFkZcvZb003K02E0JYQtkxppE0pTYDw4UCrGqwFCieUZj+HujtNynGICYSp0hx1pYnU5ldnZ9LhgLsp9PWQOYVDhFuVJlxTbhA5N+LySRPH4/l7+ffhh2HOZn+hb/FJFLxz7OBnHSQhkzZrFjc45rRreRPgJIpLYnaGBbcWsGkXkJJo8XvPXsXqZtR1suNHJCQzqKdwr5PHySDJ35w/GnTVzYjqSDFFDTMO0UUSxQKEXTJIcmyLuGq2RCLCYhyzzUdNaT5nX9wahYNkQBKpSCuP2JjIIxItjtTQXMyfs+c+fkJAQjIL1Vtu9fHwpCl43yr1ZW7L455EJpHKWgV8JhQrAK9kcChiMWKg8xCppYakO2r2olrMnnPxTbaRkJwlHWaqy1MAT5MtJjkdDxO3FkaF0VS2kURqGjKPo96ERqHONCZRhopudfVsRPhmL94gjrImhazrR/Aui8zjU7WEIsrajaDWb58EaxeXkjRotobwvFMlIiIC4F/vVf0AKJGr395PB6gAAAAASUVORK5CYII="
            alt="Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, zIndex: 2 }}
          />
          <Box sx={{ flexGrow: 1, zIndex: 2, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page === 'HOME' ? '/home' : page === 'ALL PRODUCTS' ? '/all-products' : '/about-us'}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, zIndex: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'HOME' ? '/home' : page === 'ALL PRODUCTS' ? '/all-products' : '/about-us'}
                sx={{ my: 2, color: 'white', zIndex: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ zIndex: 2, flexGrow: 0 }}>
            <Tooltip title="View Cart">
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
