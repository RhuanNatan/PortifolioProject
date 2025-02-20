export default function IntermediatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to the Intermediate Page</h1>
      <p className="text-lg text-gray-600 mt-4">This page is placed between the Home component and the Main wrapper.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Go to Homepage</a>
    </div>
  );
};