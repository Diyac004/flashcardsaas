import { SignUp } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography,Box } from "@mui/material";
import Link from "next/link";

export default function SignUpPage(){
    return(
        <Container maxWidth="100vw">
            <AppBar position="static" gutterBottom>
                <Toolbar display="flex" alignItem="center">
                    <Typography varient='h6' sx={{
                        flexGrow:1
                    }}>FlashCard SaaS</Typography>
                    <Button color="inherit">
                        <Link href="/sign-in" passHref>Login</Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-up" passHref>Sign Up</Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex"
            alignItem="center"
            flexDirection="column"
            justifyContent="center">
                <Typography mt={4} variant="h4" textAlign="center" gutterBottom>Sign Up</Typography>
                <SignUp />    
            </Box>
        </Container>
    )
}