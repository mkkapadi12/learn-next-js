export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-2 flex-col">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
    </div>
  );
}
