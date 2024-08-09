import { supabase } from "@/lib/supabase";

const { NextResponse } = require("next/server");

export async function GET(request, context) {
  console.log(context.params.itemid);
  let { data, error } = await supabase
    .from("spareparts")
    .select(
      `
  *,
  carsystems (
    systemname
  )
`
    )
    .eq("spareid", context.params.itemid);

  if (error) return NextResponse.json(error);

  return NextResponse.json(data);
}

export async function POST(request, context){

}

export function UPDATE(request, context){
  
}