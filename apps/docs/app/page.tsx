import Image from "next/image";
import styles from "./page.module.css";
import { Dashboard } from "../screens/Dashboard";
import { Button } from "@repo/ui/components/ui/button";

export default function Home() {
  return <div>
    <Dashboard></Dashboard>
    <Button>Kean</Button>
  </div>
}
