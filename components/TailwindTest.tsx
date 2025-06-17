export default function TailwindTest() {
  return (
    <div className="p-8 m-4 bg-blue-500 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Tailwind CSS Test</h1>
      <p className="text-sm">If you can see this styled box, Tailwind CSS is working!</p>
      <div className="mt-4 flex space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded"></div>
        <div className="w-4 h-4 bg-green-500 rounded"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
      </div>
    </div>
  );
}
