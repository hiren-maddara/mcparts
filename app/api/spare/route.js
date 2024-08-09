import { supabase } from "@/lib/supabase";

const { NextResponse } = require("next/server");

export async function GET() {
  try {
    let { data: spareparts, error } = await supabase.from("spareparts").select(`
  *,
  carsystems (
    systemname
  )
`);

    if (error) return NextResponse.json(error);

    return NextResponse.json(spareparts);
  } catch (error) {
    // return NextResponse.json(error, { status: 500 });
    return NextResponse.json(error);
  }
}
