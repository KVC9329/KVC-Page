import { NextResponse } from 'next/server';

export function middleware(req) {
    // Check if the user has a valid token
    const token =   localStorage.get('accessToken'); // Assuming the token is stored in cookies

    // Redirect to login if the token is missing
    if (token == "") {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ['http://localhost:3000/add'], // Add protected paths here
};
