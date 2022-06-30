import { Typography, Link } from '@mui/material/';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/rizallfaiz">
                Smart Doc Store.
            </Link>
            {' For Tugas Akhir'}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}