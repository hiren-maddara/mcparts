import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  let { data, error } = await supabase
    .from("sales")
    .select(`*, employees(employeeid, employeename), spareparts(spareid, partnum, partname)`);

  if (error) return NextResponse.json({ ...error, status: 505 });

  return NextResponse.json(data);
}

export async function POST(request) {
  const { saleData } = await request.json();
  const { data, error } = await supabase
    .from("sales")
    .insert([saleData])
    .select();

  if (error) {
    return NextResponse.json({ ...error, status: 505 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PUT(request) {
  const { saleid, updatedData } = await request.json();
  const { data, error } = await supabase
    .from("sales")
    .update(updatedData)
    .eq("saleid", saleid)
    .select();

  if (error) {
    return NextResponse.json({ ...error, status: 505 });
  }

  return NextResponse.json(data);
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const saleid = parseInt(searchParams.get("saleid"), 10);

    const { data, error } = await supabase
      .from("sales")
      .delete()
      .eq("saleid", saleid);

    if (error) {
      return NextResponse.json({ ...error, status: 505 });
    }

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json(error)
  }
}
