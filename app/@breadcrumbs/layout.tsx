import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";

interface LayoutProps {
  children: React.ReactNode;
}
export default function BreadcrumbsLayout({ children }: LayoutProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>{children}</BreadcrumbList>
    </Breadcrumb>
  );
}
