import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get Real‑Time Prices for Your Specialty Crops
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Farmers in remote areas can now post and receive instant market
            price updates via SMS or web — no middlemen, no delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prices" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              View Live Prices
            </Link>
            <Link href="/alerts" className="flex-1 bg-green-50 hover:bg-green-100 border border-green-300 text-green-600 font-medium py-3 px-6 rounded-lg transition-colors">
              Set Price Alerts
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Post a Price</h3>
                <p className="text-gray-500 mt-2">
                  Simply enter the crop, quantity, and price you observed at
                  the market. Your entry helps neighbors get fair deals.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Receive Alerts</h3>
                <p className="text-gray-500 mt-2">
                  Set a target price for any crop and get an instant SMS or
                  push notification when the market hits it.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h3m8 0v3m-4-3h3m8-3H9a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Community Verified</h3>
                <p className="text-gray-500 mt-2">
                  Prices are validated by multiple farmers, reducing spam and
                  ensuring accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the CropPrice Pulse Community Today
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            It's free, open to all farmers, and works on any phone — no
            smartphone required for SMS alerts.
          </p>
          <Link href="/alerts" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Start Posting Prices
          </Link>
        </div>
      </section>
    </div>
  );
}