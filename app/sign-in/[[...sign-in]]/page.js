import { SignIn } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography,Box } from "@mui/material";
import Link from "next/link";

export default function SignUpPage(){
    return(
        <Container maxWidth="sm">
            <AppBar position="static" sx={{backgroundColor:"3f51b5"}} gutterBottom>
                <Toolbar>
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
            <Box display="flex" flexDirection="column"
            alignItem="center"
            justifyContent="center">
                <Typography mt={4} variant="h4" textAlign="center" gutterBottom>Sign In</Typography>
                <SignIn alignItem="center"/>
                
            </Box>
        </Container>
    )
}