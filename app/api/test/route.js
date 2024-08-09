// import {sequelize} from "@/lib/db/init"
// import { System } from "@/models/systems";
// import { SpareParts } from "@/models/spare-parts";
import { supabase } from "@/lib/supabase";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const spare = await SpareParts.findAll()

    let { data: spareparts, error } = await supabase.from("spareparts").select("*");

    return NextResponse.json(spareparts);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }


}
