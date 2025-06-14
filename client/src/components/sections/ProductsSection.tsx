import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Check, X } from "lucide-react";

const ProductsSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const viraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (viraRef.current) observer.observe(viraRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (viraRef.current) observer.unobserve(viraRef.current);
    };
  }, []);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-4">Our Product</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#2F2F2F]">
            Software tool that helps founders decide which ideas will become profitable businesses.
          </p>
        </div>
        
        {/* ViRA Header Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div 
            ref={viraRef}
            className="bg-[#EDF6F9] rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 animate-slide-up"
          >
            <div className="w-full h-64 bg-[#161b29] flex flex-col items-center justify-center text-white">
              <div className="text-[#4A7C74] font-montserrat font-bold text-2xl mb-1">ViRA™</div>
              <h3 className="text-white text-xl font-montserrat font-bold mb-4">Startup Validation + Readiness</h3>
              <p className="text-white text-2xl font-montserrat mb-2">Assistant</p>
              <p className="text-sm text-gray-300 max-w-xs text-center">Helping founders decide which ideas will become profitable businesses and which to avoid</p>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#4A7C74]">ViRA</h3>
                <span className="bg-[#4A7C74] text-white text-xs font-bold px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-[#2F2F2F] text-center">
                Our startup validation assistant that helps founders decide which ideas will become profitable businesses and which they shouldn't pursue.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-[#2F2F2F] mb-2">Free</h4>
                <div className="text-4xl font-bold text-[#4A7C74] mb-2">$0</div>
                <p className="text-gray-600">Perfect for testing</p>
              </div>
              <ul className="space-y-3 mb-8 h-64">
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  1 idea validation
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  AI-powered idea structuring
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Basic validation framework
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Session-based saving
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Print to PDF
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  JSON export
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  Survey templates
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  Competitive analysis
                </li>
              </ul>
              <Button className="w-full bg-white border border-[#4A7C74] text-[#4A7C74] hover:bg-[#4A7C74] hover:text-white">
                Get Started Free
              </Button>
            </div>

            {/* Plus Plan */}
            <div className="bg-white border-2 border-[#4A7C74] rounded-lg p-8 shadow-xl relative">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-[#2F2F2F] mb-2">Plus</h4>
                <div className="text-4xl font-bold text-[#4A7C74] mb-2">$9.99<span className="text-lg font-normal">/month</span></div>
                <p className="text-gray-600">For growing entrepreneurs</p>
              </div>
              <ul className="space-y-3 mb-8 h-64">
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Up to 3 idea validations
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  All Free features
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  JSON export for BuiRe integration
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Survey templates library
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Competitive landscape analysis
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Account dashboard
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Idea organization tools
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  ICE Framework scoring
                </li>
              </ul>
              <Button className="w-full bg-[#4A7C74] hover:bg-opacity-90 text-white mb-2">
                Try Plus
              </Button>
              <p className="text-xs text-gray-500 text-center">Simulate Plus features</p>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-[#2F2F2F] mb-2">Pro</h4>
                <div className="text-4xl font-bold text-[#4A7C74] mb-2">$19.99<span className="text-lg font-normal">/month</span></div>
                <p className="text-gray-600">For serious innovators</p>
              </div>
              <ul className="space-y-3 mb-8 h-64">
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Unlimited idea validations
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  All Plus features
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  ICE Framework analysis
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  AI-generated ICE scores
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Human feedback via PickFu
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Advanced survey templates
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Priority support
                </li>
                <li className="flex items-center text-[#2F2F2F]">
                  <Check className="w-5 h-5 text-[#4A7C74] mr-3 flex-shrink-0" />
                  Dashboard analytics
                </li>
              </ul>
              <Button className="w-full bg-[#4A7C74] hover:bg-opacity-90 text-white mb-2">
                Try Pro
              </Button>
              <p className="text-xs text-gray-500 text-center">Simulate Pro features</p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h4 className="text-2xl font-bold text-[#4A7C74] mb-6 text-center">Detailed Feature Comparison</h4>
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-[#2F2F2F] border-r border-gray-200">Feature</th>
                  <th className="text-center p-4 font-semibold text-[#2F2F2F] border-r border-gray-200">Free</th>
                  <th className="text-center p-4 font-semibold text-[#2F2F2F] border-r border-gray-200">Plus</th>
                  <th className="text-center p-4 font-semibold text-[#2F2F2F]">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">Idea Validations</td>
                  <td className="p-4 text-center border-r border-gray-200">1</td>
                  <td className="p-4 text-center border-r border-gray-200">3</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">AI-Powered Analysis</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">JSON Export</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">Survey Templates</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">Competitive Analysis</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">ICE Framework Scoring</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">Human Feedback Integration</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 text-[#2F2F2F] border-r border-gray-200 font-medium">Account Dashboard</td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <X className="w-6 h-6 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-r border-gray-200">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-[#4A7C74] mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Waitlist Section */}
        <div className="text-center">
          <Button variant="secondary" className="bg-gray-300 text-gray-600 cursor-not-allowed font-montserrat font-semibold" disabled>
            Join Waitlist <Bell className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;