
import { CardContent } from "@repo/ui/components/ui/card";
import ClientTable from "~/app/users/client-table";

export default function PlaceholderContent() {
  return (
    <CardContent className="min-h-screen">
      <ClientTable />
    </CardContent>
  );
}
