import React, { useContext } from 'react'
import "./project.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThemeContext} from "../../provider/ThemeProvider"
function Project({img,link,title,desc,githublink}) {
    const{darkMode}=useContext(ThemeContext);
    return (
        <Card sx={{ maxWidth: 345, marginBottom:"5%" }} >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent style={{backgroundColor:darkMode&&"#454545",color:darkMode&&'white',height:200}}>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color={darkMode?"#DCD6C9":"text.secondary"}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions style={{backgroundColor:darkMode&&"#454545"}}>
                <Button color="warning" size="small" href={githublink} target="_blank">Source-Code</Button>
                {link&&<Button color="warning" target="_blank" href={link} size="small">Webpage</Button>}
            </CardActions>
        </Card>
    )
}

export default Project
