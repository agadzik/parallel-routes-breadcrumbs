import { TypeBreadcrumb } from "@/components/type-breadcrumb";

interface PageProps {
  params: {
    typeId: string;
  };
}
export default function TypeBreadcrumbPage({ params }: PageProps) {
  const { typeId } = params;
  return <TypeBreadcrumb typeId={typeId} />;
}
