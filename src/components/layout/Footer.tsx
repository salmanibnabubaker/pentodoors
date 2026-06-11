import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="container-custom py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Pentodoors
            </h3>

            <p className="text-neutral-400">
              Premium Doors, Windows & Frames.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Products
            </h4>

            <div className="space-y-2 text-neutral-400">
              <Link href="/products/doors">
                Doors
              </Link>

              <br />

              <Link href="/products/windows">
                Windows
              </Link>

              <br />

              <Link href="/products/frames">
                Frames
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <div className="space-y-2 text-neutral-400">
              <Link href="/about">
                About
              </Link>

              <br />

              <Link href="/projects">
                Projects
              </Link>

              <br />

              <Link href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p className="text-neutral-400">
              Kerala, India
            </p>
          </div>

        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 text-neutral-500">

          Built for Durability.
          Designed for Modern Living.

        </div>

      </div>
    </footer>
  );
}