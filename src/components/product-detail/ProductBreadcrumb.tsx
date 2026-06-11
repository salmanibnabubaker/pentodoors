import Link from "next/link";

interface ProductBreadcrumbProps {
  category: string;
  productName: string;
}

export default function ProductBreadcrumb({
  category,
  productName,
}: ProductBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="pt-8 px-2 mb-4"
    >
      <ol
        className="
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
          text-neutral-500
        "
      >
        <li>
          <Link
            href="/"
            className="
              hover:text-black
              transition-colors
            "
          >
            Home
          </Link>
        </li>

        <li className="text-neutral-300">
          ›
        </li>

        <li>
          <Link
            href="/products"
            className="
              hover:text-black
              transition-colors
            "
          >
            Products
          </Link>
        </li>

        <li className="text-neutral-300">
          ›
        </li>

        <li className="text-neutral-600">
          <Link
            href={`/products/${category.toLowerCase()}`}
            className="
              hover:text-black
              transition-colors
            "
          >
            {category.toLocaleLowerCase()}
          </Link>
        </li>

        <li className="text-neutral-300">
          ›
        </li>

        <li
          className="
            text-black
            font-medium
            truncate
          "
        >
          {productName}
        </li>
      </ol>
    </nav>
  );
}