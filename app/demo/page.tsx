"use client";
import { demoData } from "@/redux/slices/demoSlice"; // Add this import
import { selectDemo } from "@/redux/slices/selector";
import { useSelector } from "react-redux";

export default function Page() {
  const demo: demoData = useSelector(selectDemo);
  console.log(demo[0]);
  return <div>hello</div>;
}
