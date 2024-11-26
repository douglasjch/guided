import { NextResponse } from 'next/server'
export async function GET(request, context) {
    const {params} = context
    const {slug} = await params
    return NextResponse.json({slug: slug})
};
