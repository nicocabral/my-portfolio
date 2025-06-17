export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Nico Cabral. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
