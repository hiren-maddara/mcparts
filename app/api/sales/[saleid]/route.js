import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request, {params: {saleid}}){
    let {data, error} = await supabase.from('sales').select(`*, employees(employeeid, employeename)`).eq('saleid', saleid)
    if (error) return NextResponse.json({...error, status: 505})

    return NextResponse.json(data)
}