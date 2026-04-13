import Image from "next/image";
import styles from "./page.module.css";
import SuccessStories from "@/containers/successContainer/SuccessStoriesContainer";
import Link from "next/link";

export default function Home() {
  return (
    <>
  <Link href="/SuccessStories"> <h1> View Success Stories</h1></Link> <br/>
  <Link href={"/DetailPage"}> <h1>View Detail Page</h1></Link>
     
    </>
  );
}
