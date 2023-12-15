import { NextResponse, NextRequest } from "next/server"; 
import {places} from "@/mock/places" ;

export function GET(req: NextRequest) {
    return NextResponse.json(places);
}