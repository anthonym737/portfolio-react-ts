import { Avatar, Box, Button, Typography } from "@mui/material";
import { NavBar } from "@components/NavBar";

export const CVPage = () => 
{
    
    return (
        <>
            <NavBar title="Mon CV"/>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar alt="Prénom Nom" src="chemin/vers/image.jpg" sx={{ width: 56, height: 56 }}>
                <Typography variant="h4" gutterBottom>
                    Prénom Nom
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Description
                </Typography>
                <Button variant="contained" href="/lien-vers-fichier-a-telecharger.pdf" download>
                    Télécharger
                </Button>
                </Avatar>
            </Box>
        </>
    );
}
