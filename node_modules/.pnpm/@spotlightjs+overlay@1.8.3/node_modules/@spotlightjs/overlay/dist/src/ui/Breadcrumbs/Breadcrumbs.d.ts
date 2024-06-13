export type CrumbProps = {
    id: string;
    label: string;
    link?: boolean;
    to?: string;
};
export type BreadcrumbProps = {
    crumbs: CrumbProps[];
};
export default function Breadcrumbs({ crumbs }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element;
